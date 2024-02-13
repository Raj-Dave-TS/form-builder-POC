import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Organization } from './entities/organization.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
  ) {}

  create(createOrganizationDto: CreateOrganizationDto) {
    return this.organizationRepository.save(createOrganizationDto);
  }

  findAll() {
    return this.organizationRepository.find({});
  }

  findOne(id: number) {
    return this.organizationRepository.find({ where: { organizationId: id } });
  }
}
