import { Organization } from 'src/organization/entities/organization.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Form {
  @PrimaryGeneratedColumn('increment')
  formVersionId: number;

  @Column({ type: 'int8' })
  formId: number;

  @ManyToOne(() => Organization, (organization) => organization.forms)
  organization: Organization;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  data: string;

  @CreateDateColumn()
  createdAt: Date;
}
