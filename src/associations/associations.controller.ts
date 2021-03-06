import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { CreateAssociationDto } from './dto/create-association.dto';
import { Association } from './associations.entity';
import { AssociationsService } from './associations.service';

@ApiTags('associations')
@Controller('associations')
export class AssociationsController {
  constructor(private associationsService: AssociationsService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The association has been successfully created.',
    type: Association,
  })
  @ApiNotFoundResponse({
    description: 'The exam or the lab were not found',
  })
  @ApiUnprocessableEntityResponse({
    description: 'The exam or the lab were not active',
  })
  public createAssociation(
    @Body() createAssociationDto: CreateAssociationDto,
  ): Promise<Association> {
    return this.associationsService.createAssociation(createAssociationDto);
  }

  @Delete('/:id')
  @ApiParam({
    name: 'id',
    description: 'The id of the association to be deleted',
    type: 'string',
    format: 'uuid',
  })
  @ApiOkResponse({
    description: 'The association has been successfully deleted.',
  })
  @ApiNotFoundResponse({
    description: 'The association were not found',
  })
  public deleteAssociation(@Param('id') id: string): Promise<void> {
    return this.associationsService.deleteAssociation(id);
  }
}
