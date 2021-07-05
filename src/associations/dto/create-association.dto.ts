import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateAssociationDto {
  @IsNotEmpty()
  @IsUUID()
  exam_id: string;

  @IsNotEmpty()
  @IsUUID()
  lab_id: string;
}
