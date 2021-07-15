import {
  HttpStatus,
  Injectable,
  ServiceUnavailableException,
} from '@nestjs/common';
import { LabStatus } from './enum/lab-status.enum';
import { CreateLabDto } from './dto/create-lab.dto';
import { Lab } from './labs.entity';
import { LabsRepository } from './labs.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';
import { UpdateLabDto } from './dto/update-lab.dto';
import { GetNearestLabDto } from './dto/get-nearest-lab.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class LabsService {
  constructor(
    @InjectRepository(LabsRepository)
    private labsRepository: LabsRepository,
    private httpService: HttpService,
  ) {}

  public async getAllActiveLabs(): Promise<Lab[]> {
    return this.labsRepository.find({ where: { status: LabStatus.ACTIVE } });
  }

  public async getLabById(id: string): Promise<Lab> {
    const lab: Lab = await this.labsRepository.findOne(id);
    if (!lab) {
      throw new NotFoundException(`Lab with id '${id}' not found`);
    }
    return lab;
  }

  public async getNearestLabByExamName(
    getNearestLabDto: GetNearestLabDto,
  ): Promise<Lab & { temperature: number }> {
    const [nearestLab] =
      await this.labsRepository.getLabsByExamNameOrderedByNearestLocation(
        getNearestLabDto,
      );
    if (!nearestLab) {
      throw new NotFoundException(
        `Labs that performs the exam '${getNearestLabDto.examName}' were not found`,
      );
    }
    const { latitude, longitude } = getNearestLabDto;
    const { status, data } = await this.httpService
      .get(
        `${process.env.OPEN_WEATHER_BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${process.env.OPEN_WEATHER_KEY}`,
      )
      .toPromise();
    if (status !== HttpStatus.OK) {
      throw new ServiceUnavailableException(
        'The temperature service is unavailable',
      );
    }
    console.log(data.main.temp);
    return {
      ...nearestLab,
      temperature: this.convertKelvinToCelsius(data.main.temp),
    };
  }

  public async createLab(createLabDto: CreateLabDto): Promise<Lab> {
    const lab: Lab = this.labsRepository.create({
      ...createLabDto,
      status: LabStatus.ACTIVE,
      geolocation: `POINT(${createLabDto.longitude} ${createLabDto.latitude})`,
    });
    await this.labsRepository.save(lab);
    return lab;
  }

  public async updateLab(id: string, UpdateLabDto: UpdateLabDto): Promise<Lab> {
    const lab: Lab = await this.getLabById(id);
    const updatedLab = {
      ...lab,
      ...UpdateLabDto,
    };
    await this.labsRepository.save(updatedLab);
    return updatedLab;
  }

  public async deleteLab(id: string): Promise<void> {
    const lab: Lab = await this.getLabById(id);
    if (lab.status === LabStatus.INACTIVE) {
      throw new ForbiddenException('Only active labs can be deleted');
    }
    await this.labsRepository.softDelete(lab.id);
  }

  private convertKelvinToCelsius(kelvinTemp: number): number {
    return kelvinTemp - 273.15;
  }
}
