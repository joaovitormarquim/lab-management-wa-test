import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLabDto } from './dto/create-lab.dto';
import { Lab } from './labs.model';
import { LabsService } from './labs.service';

@ApiTags('labs')
@Controller('labs')
export class LabsController {
  constructor(private labsService: LabsService) {}

  @Get()
  public getAllLabs(): Lab[] {
    return this.labsService.getAllLabs();
  }

  @Post()
  public createLab(@Body() createLabDto: CreateLabDto): Lab {
    return this.labsService.createLab(createLabDto);
  }
}
