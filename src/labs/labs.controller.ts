import { Body, Controller, Get, Post } from '@nestjs/common';
import { Lab } from './labs.model';
import { LabsService } from './labs.service';

@Controller('labs')
export class LabsController {
  constructor(private labsService: LabsService) {}

  @Get()
  public getAllLabs(): Lab[] {
    return this.labsService.getAllLabs();
  }

  @Post()
  public createLab(
    @Body('name') name: string,
    @Body('address') address: string,
  ): Lab {
    return this.labsService.createLab(name, address);
  }
}
