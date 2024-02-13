import { Injectable } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Form } from './entities/form.entity';
import { Repository } from 'typeorm';
import { Organization } from 'src/organization/entities/organization.entity';

@Injectable()
export class FormService {
  constructor(
    @InjectRepository(Form) private formRepository: Repository<Form>,
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
    return this.formRepository.find({
      where: { organization: { organizationId } },
    });
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
    });
  }

  findOne(formVersionId: number) {
    return this.formRepository.findOne({
      where: { formVersionId },
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
