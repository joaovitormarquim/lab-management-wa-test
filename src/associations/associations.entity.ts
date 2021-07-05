import { Exam } from 'src/exams/exams.entity';
import { Lab } from 'src/labs/labs.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('associations')
export class Association {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  exam_id: string;

  @Column('uuid')
  lab_id: string;

  @ManyToOne(() => Exam, (exam) => exam.associations)
  @JoinColumn({ name: 'exam_id' })
  exam: Exam;

  @ManyToOne(() => Lab, (lab) => lab.associations, { eager: true })
  @JoinColumn({ name: 'lab_id' })
  lab: Lab;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
