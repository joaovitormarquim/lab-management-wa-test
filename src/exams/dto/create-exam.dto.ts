import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ExamType } from '../enum/exam-type.enum';

export class CreateExamDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The name of exam',
    type: 'string',
    example: 'Blood Count',
  })
  name: string;

  @IsNotEmpty()
  @IsEnum(ExamType)
  @ApiProperty({
    description: 'The type of the exame',
    type: 'string',
    enum: [...Object.values(ExamType)],
  })
  type: ExamType;
}
