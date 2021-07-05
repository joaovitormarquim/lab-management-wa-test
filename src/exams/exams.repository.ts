import { EntityRepository, Repository } from 'typeorm';
import { Exam } from './exams.entity';

@EntityRepository(Exam)
export class ExamsRepository extends Repository<Exam> {}
