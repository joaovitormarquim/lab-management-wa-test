import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAssociation1625518143528 implements MigrationInterface {
  name = 'CreateAssociation1625518143528';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'associations',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'exam_id',
            type: 'uuid',
          },
          {
            name: 'lab_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'AssociationExam',
            referencedTableName: 'exams',
            referencedColumnNames: ['id'],
            columnNames: ['exam_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'AssociationLab',
            referencedTableName: 'labs',
            referencedColumnNames: ['id'],
            columnNames: ['lab_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('associations');
  }
}
