import { MigrationInterface, QueryRunner } from 'typeorm';

export class AAddGeographyColumnsToLabs1626311377252
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE labs ADD COLUMN geolocation GEOGRAPHY(point)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE labs DROP COLUMN geolocation`);
  }
}
