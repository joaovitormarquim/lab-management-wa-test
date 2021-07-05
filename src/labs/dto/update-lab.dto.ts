import { IsEnum, IsString } from 'class-validator';
import { LabStatus } from '../enum/lab-status.enum';

export class UpdateLabDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  @IsEnum(LabStatus)
  status: LabStatus;
}
