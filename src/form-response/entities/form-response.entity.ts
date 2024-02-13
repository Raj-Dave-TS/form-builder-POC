import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class FormResponse {
  @PrimaryGeneratedColumn('increment')
  formResponseId: number;

  @Column()
  data: string;

  @CreateDateColumn()
  createdAt: Date;
}
