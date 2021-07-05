import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Lab {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  active: string;
}
