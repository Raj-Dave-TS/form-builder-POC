import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationService.create(createOrganizationDto);
  }

  @Get()
  findAll() {
    return this.organizationService.findAll();
  }

  @Get(':organizationId')
  findOne(@Param('organizationId') organizationId: string) {
    return this.organizationService.findOne(+organizationId);
  }
}
