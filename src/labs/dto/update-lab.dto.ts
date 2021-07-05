import { IsEnum, IsString } from 'class-validator';
import { LabStatus } from '../lab-status.enum';

export class UpdateLabDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  @IsEnum(LabStatus)
  status: string;
}
