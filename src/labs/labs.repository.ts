import { EntityRepository, Repository } from 'typeorm';
import { GetNearestLabDto } from './dto/get-nearest-lab.dto';
import { Lab } from './labs.entity';

@EntityRepository(Lab)
export class LabsRepository extends Repository<Lab> {
  constructor() {
    super();
  }

  public async getLabsByExamNameOrderedByNearestLocation({
    longitude,
    examName,
    latitude,
  }: GetNearestLabDto): Promise<Lab[]> {
    const response = await this.createQueryBuilder()
      .select(
        `*, ST_Distance(geolocation, ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)) AS distance`,
      )
      .where(
        `id IN (SELECT a.lab_id FROM associations a INNER JOIN exams ON a.exam_id IN (SELECT e.id FROM exams e WHERE "name" = '${examName}'))`,
      )
      .orderBy(`distance`)
      .execute();

    return response as Lab[];
  }
}
