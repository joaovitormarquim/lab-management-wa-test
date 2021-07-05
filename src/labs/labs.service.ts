import { Injectable } from '@nestjs/common';
import { LabStatus } from './enum/lab-status.enum';
import { CreateLabDto } from './dto/create-lab.dto';
import { Lab } from './labs.entity';
import { LabsRepository } from './labs.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';
import { UpdateLabDto } from './dto/update-lab.dto';

@Injectable()
export class LabsService {
  constructor(
    @InjectRepository(LabsRepository)
    private labsRepository: LabsRepository,
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

  public async createLab(createLabDto: CreateLabDto): Promise<Lab> {
    const lab: Lab = this.labsRepository.create({
      ...createLabDto,
      status: LabStatus.ACTIVE,
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
}
