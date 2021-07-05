import { Injectable } from '@nestjs/common';
import { ExamStatus } from './enum/exam-status.enum';
import { CreateExamDto } from './dto/create-exam.dto';
import { Exam } from './exams.entity';
import { ExamsRepository } from './exams.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Lab } from 'src/labs/labs.entity';

@Injectable()
export class ExamsService {
  constructor(
    @InjectRepository(ExamsRepository)
    private examsRepository: ExamsRepository,
  ) {}

  public async getAllActiveExams(): Promise<Exam[]> {
    return this.examsRepository.find({ where: { status: ExamStatus.ACTIVE } });
  }

  public async getExamById(id: string): Promise<Exam> {
    const exam: Exam = await this.examsRepository.findOne(id);
    if (!exam) {
      throw new NotFoundException(`Exam with id '${id}' not found`);
    }
    return exam;
  }

  public async createExam(createExamDto: CreateExamDto): Promise<Exam> {
    const exam: Exam = this.examsRepository.create({
      ...createExamDto,
      status: ExamStatus.ACTIVE,
    });
    await this.examsRepository.save(exam);
    return exam;
  }

  public async updateExam(
    id: string,
    updateExam: UpdateExamDto,
  ): Promise<Exam> {
    const exam: Exam = await this.getExamById(id);
    const updatedExam = {
      ...exam,
      ...updateExam,
    };
    await this.examsRepository.save(updatedExam);
    return updatedExam;
  }

  public async deleteExam(id: string): Promise<void> {
    const exam: Exam = await this.getExamById(id);
    if (exam.status === ExamStatus.INACTIVE) {
      throw new ForbiddenException('Only active exams can be deleted');
    }
    await this.examsRepository.softDelete(exam.id);
  }

  public async getAssociatedLabs(name: string): Promise<Lab[]> {
    const exam: Exam = await this.examsRepository.findOne({
      where: { name },
      relations: ['associations'],
    });
    if (!exam) {
      throw new NotFoundException(`Exam with name '${name}' does not exists`);
    }
    return exam.associations.map((association) => association.lab);
  }
}
