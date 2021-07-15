import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';
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

  @IsNumber()
  @ApiProperty({
    description: 'Latitude of the lab',
    type: 'double',
    example: '77.0364',
  })
  latitude: number;

  @IsNumber()
  @ApiProperty({
    description: 'Longitude of the lab',
    type: 'double',
    example: '38.895',
  })
  longitude: number;
}
