import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ExamType } from '../enum/exam-type.enum';

export class CreateExamDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(ExamType)
  type: ExamType;
}
