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
import { LabStatus } from './enum/lab-status.enum';

@Entity('labs')
export class Lab {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    description: 'The lab id',
    type: 'string',
    format: 'uuid',
  })
  id: string;

  @Column()
  @ApiProperty({
    description: 'The lab name',
    type: 'string',
    example: 'Clinical Lab',
  })
  name: string;

  @Column()
  @ApiProperty({
    description: 'The lab address',
    type: 'string',
    example: 'Rua das Creoulas, 269',
  })
  address: string;

  @Column()
  @ApiProperty({
    description: 'The status of the lab',
    type: 'string',
    enum: [...Object.values(LabStatus)],
  })
  status: LabStatus;

  @OneToMany(() => Association, (association) => association.lab)
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
      'Date when the lab was deleted. If the lab was not deleted, the value will be null',
  })
  deleted_at: Date;
}
