import { EntityRepository, Repository } from 'typeorm';
import { Association } from './associations.entity';

@EntityRepository(Association)
export class AssociationsRepository extends Repository<Association> {}
