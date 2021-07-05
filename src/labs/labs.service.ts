import { Injectable } from '@nestjs/common';
import { Lab, LabStatus } from './labs.model';
import { v4 as uuid } from 'uuid';
import { CreateLabDto } from './dto/create-lab.dto';

@Injectable()
export class LabsService {
  private labs: Lab[] = [];

  public getAllLabs(): Lab[] {
    return this.labs;
  }

  public getLabsById(id: string): Lab {
    return this.labs.find((task) => task.id === id);
  }

  public createLab(createLabDto: CreateLabDto): Lab {
    const lab: Lab = {
      id: uuid(),
      ...createLabDto,
      status: LabStatus.ACTIVE,
    };
    this.labs.push(lab);
    return lab;
  }
}
