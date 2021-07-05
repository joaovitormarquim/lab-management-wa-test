import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { LabStatus } from './lab-status.enum';

@Entity('labs')
export class Lab {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  status: LabStatus;
}
