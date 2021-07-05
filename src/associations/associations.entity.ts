import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    description: 'The association id',
    type: 'string',
    format: 'uuid',
  })
  id: string;

  @Column('uuid')
  @ApiProperty({
    description: 'The exam id',
    type: 'string',
    format: 'uuid',
  })
  exam_id: string;

  @Column('uuid')
  @ApiProperty({
    description: 'The lab id',
    type: 'string',
    format: 'uuid',
  })
  lab_id: string;

  @ManyToOne(() => Exam, (exam) => exam.associations)
  @JoinColumn({ name: 'exam_id' })
  exam: Exam;

  @ManyToOne(() => Lab, (lab) => lab.associations, { eager: true })
  @JoinColumn({ name: 'lab_id' })
  lab: Lab;

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
}
