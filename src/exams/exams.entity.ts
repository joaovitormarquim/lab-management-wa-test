import { ApiProperty } from '@nestjs/swagger';
import { Association } from 'src/associations/associations.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ExamStatus } from './enum/exam-status.enum';
import { ExamType } from './enum/exam-type.enum';

@Entity('exams')
export class Exam {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    description: 'The exam id',
    type: 'string',
    format: 'uuid',
  })
  id: string;

  @Column()
  @ApiProperty({
    description: 'The exam id',
    type: 'string',
    format: 'uuid',
  })
  name: string;

  @Column()
  @ApiProperty({
    description: 'The type of the exame',
    type: 'string',
    enum: [...Object.values(ExamType)],
  })
  type: ExamType;

  @Column()
  @ApiProperty({
    description: 'The status of the exame',
    type: 'string',
    enum: [...Object.values(ExamStatus)],
  })
  status: ExamStatus;

  @OneToMany(() => Association, (association) => association.exam)
  associations: Association[];

  @CreateDateColumn()
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  created_at: Date;

  @UpdateDateColumn()
  @ApiProperty({
    type: 'string',
    format: 'date-time',
  })
  updated_at: Date;

  @DeleteDateColumn()
  @ApiProperty({
    type: 'string',
    format: 'date-time',
    description:
      'Date when the exam was deleted. If the exam was not deleted, the value will be null',
  })
  deleted_at: Date;
}
