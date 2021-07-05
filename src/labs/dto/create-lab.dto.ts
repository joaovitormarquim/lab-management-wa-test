import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

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
}
