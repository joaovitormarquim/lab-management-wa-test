import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { ExamStatus } from '../enum/exam-status.enum';
import { ExamType } from '../enum/exam-type.enum';

export class UpdateExamDto {
  @IsString()
  @ApiProperty({
    description: 'The name of exam',
    type: 'string',
    example: 'Blood Count',
  })
  name: string;

  @IsString()
  @IsEnum(ExamType)
  @ApiProperty({
    description: 'The type of the exame',
    type: 'string',
    enum: [...Object.values(ExamType)],
  })
  type: ExamType;

  @IsString()
  @IsEnum(ExamStatus)
  @ApiProperty({
    description: 'The status of the exame',
    type: 'string',
    enum: [...Object.values(ExamStatus)],
  })
  status: ExamStatus;
}
