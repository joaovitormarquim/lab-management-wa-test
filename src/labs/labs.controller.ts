import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateLabDto } from './dto/create-lab.dto';
import { UpdateLabDto } from './dto/update-lab.dto';
import { Lab } from './labs.entity';
import { LabsService } from './labs.service';

@ApiTags('labs')
@Controller('labs')
export class LabsController {
  constructor(private labsService: LabsService) {}

  @Get()
  @ApiOkResponse({
    description: 'The list of active labs.',
    type: [Lab],
  })
  public getAllActiveLabs(): Promise<Lab[]> {
    return this.labsService.getAllActiveLabs();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The lab has been successfully created.',
    type: Lab,
  })
  public createLab(@Body() createLabDto: CreateLabDto): Promise<Lab> {
    return this.labsService.createLab(createLabDto);
  }

  @Put('/:id')
  @ApiParam({
    name: 'id',
    description: 'The id of the lab to be updated',
    type: 'string',
    format: 'uuid',
  })
  @ApiOkResponse({
    description: 'The lab has been successfully updated.',
    type: Lab,
  })
  @ApiNotFoundResponse({
    description: 'The lab were not found',
  })
  public updateLab(
    @Body() updateLabDto: UpdateLabDto,
    @Param('id') id: string,
  ): Promise<Lab> {
    return this.labsService.updateLab(id, updateLabDto);
  }

  @Delete('/:id')
  @ApiParam({
    name: 'id',
    description: 'The id of the lab to be deleted',
    type: 'string',
    format: 'uuid',
  })
  @ApiOkResponse({
    description: 'The lab has been successfully deleted.',
  })
  @ApiNotFoundResponse({
    description: 'The lab were not found',
  })
  public deleteLab(@Param('id') id: string): Promise<void> {
    return this.labsService.deleteLab(id);
  }
}
