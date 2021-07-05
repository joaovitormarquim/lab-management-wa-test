import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateAssociationDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'The exam id to be associated with a lab',
    type: 'string',
    format: 'uuid',
  })
  exam_id: string;

  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({
    description: 'The lab id to be associated with an exam',
    type: 'string',
    format: 'uuid',
  })
  lab_id: string;
}
