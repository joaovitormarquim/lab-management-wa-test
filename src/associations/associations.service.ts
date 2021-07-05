import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAssociationDto } from './dto/create-association.dto';
import { Association } from './associations.entity';
import { AssociationsRepository } from './associations.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ExamsRepository } from 'src/exams/exams.repository';
import { LabsRepository } from 'src/labs/labs.repository';

@Injectable()
export class AssociationsService {
  constructor(
    @InjectRepository(AssociationsRepository)
    private associationsRepository: AssociationsRepository,
    private examsRepository: ExamsRepository,
    private labsRepository: LabsRepository,
  ) {}

  public async createAssociation(
    createAssociationDto: CreateAssociationDto,
  ): Promise<Association> {
    const { exam_id, lab_id } = createAssociationDto;
    const exam = this.examsRepository.findOne(exam_id);
    if (!exam) {
      throw new NotFoundException(`Exam with id '${exam_id}' not found`);
    }
    const lab = this.labsRepository.findOne(lab_id);
    if (!lab) {
      throw new NotFoundException(`Lab with id '${lab_id}' not found`);
    }
    const association = this.associationsRepository.create({ exam_id, lab_id });
    await this.associationsRepository.save(association);
    return association;
  }

  public async deleteAssociation(id: string): Promise<void> {
    const association = this.associationsRepository.findOne(id);
    if (!association) {
      throw new NotFoundException(`Association with id ${id} not found`);
    }
    await this.associationsRepository.delete(id);
  }
}
