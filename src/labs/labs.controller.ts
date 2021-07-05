import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLabDto } from './dto/create-lab.dto';
import { UpdateLabDto } from './dto/update-lab.dto';
import { Lab } from './labs.entity';
import { LabsService } from './labs.service';

@ApiTags('labs')
@Controller('labs')
export class LabsController {
  constructor(private labsService: LabsService) {}

  @Get()
  public getAllActiveLabs(): Promise<Lab[]> {
    return this.labsService.getAllActiveLabs();
  }

  @Post()
  public createLab(@Body() createLabDto: CreateLabDto): Promise<Lab> {
    return this.labsService.createLab(createLabDto);
  }

  @Put('/:id')
  public updateLab(
    @Body() updateLabDto: UpdateLabDto,
    @Param('id') id: string,
  ): Promise<Lab> {
    return this.labsService.updateLab(id, updateLabDto);
  }
}
