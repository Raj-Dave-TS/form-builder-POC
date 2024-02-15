import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from './entities/form.entity';
import { DataSource, In, Repository } from 'typeorm';
import { Organization } from 'src/organization/entities/organization.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form) private formRepository: Repository<Form>,
    private dataSource: DataSource,
  ) {}

  create(createFormDto: CreateFormDto) {
    return this.formRepository.save({
      ...createFormDto,
      organization: {
        organizationId: createFormDto.organizationId,
      } as Organization,
      formId: createFormDto.formId || Date.now(),
    });
  }

  findAllByOrganizationId(organizationId: number) {
    return this.dataSource
      .createQueryBuilder(Form, 'f')
      .where(`f."organizationId" = ${organizationId}`)
      .orderBy({
        'f.formId': 'ASC',
        'f.createdAt': 'DESC',
      })
      .select('DISTINCT ON (f."formId") f.*')
      .getRawMany();
  }

  async findAllByFormId(formId: number) {
    const data = await this.formRepository.findOne({
      where: { formId },
      order: { createdAt: -1 },
    });
    return data;
  }

  findAllVersionsByFomrId(formId: number) {
    return this.formRepository.find({
      where: { formId },
      order: { createdAt: 'DESC' },
    });
  }

  findOne(formVersionId: number) {
    return this.formRepository.findOne({
      where: { formVersionId },
    });
  }

  findAllByIds(formVersionIds: number[]) {
    return this.formRepository.find({
      where: { formVersionId: In(formVersionIds) },
    });
  }

  newVersion(formId: number, createFormDto: CreateFormDto) {
    if (!formId) throw new Error('please provider form id');
    return this.formRepository.save({
      ...createFormDto,
      organization: {
        organizationId: createFormDto.organizationId,
      } as Organization,
      formId,
    });
  }
}
