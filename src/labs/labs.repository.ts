import { EntityRepository, Repository } from 'typeorm';
import { Lab } from './labs.entity';

@EntityRepository(Lab)
export class LabsRepository extends Repository<Lab> {}
