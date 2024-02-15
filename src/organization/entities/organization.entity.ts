import { Form } from 'src/form/entities/form.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn('rowid')
  organizationId: number;

  @Column()
  name: string;

  @OneToMany(() => Form, (form) => form.organization)
  forms: Form[];
}
