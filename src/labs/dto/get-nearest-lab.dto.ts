import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class GetNearestLabDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The name of the desired exam',
    type: 'string',
    example: 'Blood Test',
  })
  examName: string;

  @IsNotEmpty()
  @IsNumberString()
  @ApiProperty({
    description: 'Latitude of the lab',
    type: 'double',
    example: '77.0364',
  })
  latitude: number;

  @IsNotEmpty()
  @IsNumberString()
  @ApiProperty({
    description: 'Longitude of the lab',
    type: 'double',
    example: '38.895',
  })
  longitude: number;
}
