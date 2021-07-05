import { Injectable } from '@nestjs/common';
import { LabStatus } from './lab-status.enum';
import { CreateLabDto } from './dto/create-lab.dto';
import { Lab } from './labs.entity';
import { LabsRepository } from './labs.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LabsService {
  constructor(
    @InjectRepository(LabsRepository)
    private labsRepository: LabsRepository,
  ) {}

  public async getAllActiveLabs(): Promise<Lab[]> {
    return this.labsRepository.find({ where: { status: LabStatus.ACTIVE } });
  }

  public async getLabsById(id: string): Promise<Lab> {
    return this.labsRepository.findOne(id);
  }

  public async createLab(createLabDto: CreateLabDto): Promise<Lab> {
    const lab: Lab = this.labsRepository.create({
      ...createLabDto,
      status: LabStatus.ACTIVE,
    });
    await this.labsRepository.save(lab);
    return lab;
  }
}
