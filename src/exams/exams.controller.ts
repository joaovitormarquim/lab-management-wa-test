import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Lab } from 'src/labs/labs.entity';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './exams.entity';
import { ExamsService } from './exams.service';

@ApiTags('exams')
@Controller('exams')
export class ExamsController {
  constructor(private examsService: ExamsService) {}

  @Get()
  public getAllActiveExams(): Promise<Exam[]> {
    return this.examsService.getAllActiveExams();
  }

  @Post()
  public createExam(@Body() createExamDto: CreateExamDto): Promise<Exam> {
    return this.examsService.createExam(createExamDto);
  }

  @Put('/:id')
  public updateExam(
    @Body() updateExamDto: UpdateExamDto,
    @Param('id') id: string,
  ): Promise<Exam> {
    return this.examsService.updateExam(id, updateExamDto);
  }

  @Delete('/:id')
  public deleteExam(@Param('id') id: string): Promise<void> {
    return this.examsService.deleteExam(id);
  }

  @Get('/:name/associated-labs')
  public getAssociatedLabs(@Param('name') name: string): Promise<Lab[]> {
    return this.examsService.getAssociatedLabs(name);
  }
}
