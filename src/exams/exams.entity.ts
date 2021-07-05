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
  id: string;

  @Column()
  name: string;

  @Column()
  type: ExamType;

  @Column()
  status: ExamStatus;

  @OneToMany(() => Association, (association) => association.exam)
  associations: Association[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
