import { Injectable } from '@nestjs/common';
import { Lab, LabStatus } from './labs.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LabsService {
  private labs: Lab[] = [];

  public getAllLabs(): Lab[] {
    return this.labs;
  }

  public createLab(name: string, address: string): Lab {
    const lab: Lab = {
      id: uuid(),
      name,
      address,
      status: LabStatus.ACTIVE,
    };
    this.labs.push(lab);
    return lab;
  }
}
