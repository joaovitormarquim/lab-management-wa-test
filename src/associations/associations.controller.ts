import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateAssociationDto } from './dto/create-association.dto';
import { Association } from './associations.entity';
import { AssociationsService } from './associations.service';

@ApiTags('associations')
@Controller('associations')
export class AssociationsController {
  constructor(private associationsService: AssociationsService) {}

  @Post()
  public createAssociation(
    @Body() createAssociationDto: CreateAssociationDto,
  ): Promise<Association> {
    return this.associationsService.createAssociation(createAssociationDto);
  }

  @Delete('/:id')
  public deleteAssociation(@Param('id') id: string): Promise<void> {
    return this.associationsService.deleteAssociation(id);
  }
}
