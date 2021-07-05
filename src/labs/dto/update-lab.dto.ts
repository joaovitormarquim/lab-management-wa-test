import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { LabStatus } from '../enum/lab-status.enum';

export class UpdateLabDto {
  @IsString()
  @ApiProperty({
    description: 'The name of the lab',
    type: 'string',
    example: 'Clinical Lab',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'The address of the lab',
    type: 'string',
    example: 'Rua das Creoulas, 259',
  })
  address: string;

  @IsString()
  @IsEnum(LabStatus)
  @ApiProperty({
    description: 'The status of the lab',
    type: 'string',
    enum: [...Object.values(LabStatus)],
  })
  status: LabStatus;
}
