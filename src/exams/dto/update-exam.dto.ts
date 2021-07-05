import { IsEnum, IsString } from 'class-validator';
import { ExamStatus } from '../enum/exam-status.enum';
import { ExamType } from '../enum/exam-type.enum';

export class UpdateExamDto {
  @IsString()
  name: string;

  @IsString()
  @IsEnum(ExamType)
  type: ExamType;

  @IsString()
  @IsEnum(ExamStatus)
  status: ExamStatus;
}
