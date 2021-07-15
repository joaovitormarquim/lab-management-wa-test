import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddLatLonToLabs1626310121435 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'labs',
      new TableColumn({
        name: 'latitude',
        type: 'double precision',
        isNullable: true,
      }),
    );
    await queryRunner.addColumn(
      'labs',
      new TableColumn({
        name: 'longitude',
        type: 'double precision',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('labs', 'longitude');
    await queryRunner.dropColumn('labs', 'latitude');
  }
}
