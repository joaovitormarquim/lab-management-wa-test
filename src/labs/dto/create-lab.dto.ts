import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLabDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
