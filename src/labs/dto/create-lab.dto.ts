import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLabDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The name of the lab',
    type: 'string',
    example: 'Clinical Lab',
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The address of the lab',
    type: 'string',
    example: 'Rua das Creoulas, 259',
  })
  address: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Latitude of the lab',
    type: 'double',
    example: '77.0364',
  })
  latitude: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Longitude of the lab',
    type: 'double',
    example: '38.895',
  })
  longitude: number;
}
