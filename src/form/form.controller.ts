import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get(':formVersionId')
  findOne(@Param('formVersionId') formVersionId: string) {
    return this.formService.findOne(+formVersionId);
  }

  @Get('formId/:formId')
  findAllByFomrId(@Param('formId') formId: string) {
    return this.formService.findAllByFormId(+formId);
  }

  @Get('allVersions/:formId')
  findAllVersionsByFomrId(@Param('formId') formId: string) {
    return this.formService.findAllVersionsByFomrId(+formId);
  }

  @Get('organization/:organizationId')
  findAllByOrganizationId(@Param('organizationId') organizationId: string) {
    return this.formService.findAllByOrganizationId(+organizationId);
  }

  @Post()
  create(@Body() createFormDto: CreateFormDto) {
    return this.formService.create(createFormDto);
  }

  @Post('/newVersion/:formId')
  newVersion(
    @Param('formId') formId: string,
    @Body() createFormDto: CreateFormDto,
  ) {
    return this.formService.newVersion(+formId, createFormDto);
  }
}
