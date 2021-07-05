import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
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
  @ApiOkResponse({
    description: 'The list of active exams.',
    type: [Exam],
  })
  public getAllActiveExams(): Promise<Exam[]> {
    return this.examsService.getAllActiveExams();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The exam has been successfully created.',
    type: Exam,
  })
  public createExam(@Body() createExamDto: CreateExamDto): Promise<Exam> {
    return this.examsService.createExam(createExamDto);
  }

  @Put('/:id')
  @ApiParam({
    name: 'id',
    description: 'The id of the exam to be updated',
    type: 'string',
    format: 'uuid',
  })
  @ApiOkResponse({
    description: 'The exam has been successfully updated.',
    type: Exam,
  })
  @ApiNotFoundResponse({
    description: 'The exam were not found',
  })
  public updateExam(
    @Body() updateExamDto: UpdateExamDto,
    @Param('id') id: string,
  ): Promise<Exam> {
    return this.examsService.updateExam(id, updateExamDto);
  }

  @Delete('/:id')
  @ApiParam({
    name: 'id',
    description: 'The id of the exam to be deleted',
    type: 'string',
    format: 'uuid',
  })
  @ApiOkResponse({
    description: 'The exam has been successfully deleted.',
  })
  @ApiNotFoundResponse({
    description: 'The exam were not found',
  })
  public deleteExam(@Param('id') id: string): Promise<void> {
    return this.examsService.deleteExam(id);
  }

  @Get('/:name/associated-labs')
  @ApiParam({
    name: 'name',
    description: 'The name of the exam to find the associated labs',
    type: 'string',
    example: 'Blood Count',
  })
  @ApiOkResponse({
    description: 'The list of labs associated with the exam',
    type: [Lab],
  })
  @ApiNotFoundResponse({
    description: 'No exams with that name on the database',
  })
  public getAssociatedLabs(@Param('name') name: string): Promise<Lab[]> {
    return this.examsService.getAssociatedLabs(name);
  }
}
