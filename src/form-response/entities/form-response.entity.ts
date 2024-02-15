import { MediaRequestFormMapping } from 'src/media-request-form-mapping/entities/media-request-form-mapping.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class FormResponse {
  @PrimaryGeneratedColumn('increment')
  formResponseId: number;

  @ManyToOne(() => MediaRequestFormMapping)
  @JoinColumn({ name: 'mediaRequestFormMappingId' })
  mediaRequestFormMapping: MediaRequestFormMapping;

  @Column()
  data: string;

  @Column({ nullable: true })
  createdBy: string;

  @CreateDateColumn()
  createdAt: Date;
}
