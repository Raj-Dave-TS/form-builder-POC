import { Form } from 'src/form/entities/form.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class MediaRequestFormMapping {
  @PrimaryGeneratedColumn('increment')
  mediaRequestFormMappingId: number;

  @Column()
  mediaRequestId: string;

  @ManyToOne(() => Form)
  form: Form;

  @CreateDateColumn()
  createdAt: Date;
}
