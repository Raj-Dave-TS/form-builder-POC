import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { FormResponseService } from './form-response.service';
import { CreateFormResponseDto } from './dto/create-form-response.dto';

@Controller('form-response')
export class FormResponseController {
  constructor(private readonly formResponseService: FormResponseService) {}

  @Post()
  create(@Body() createFormResponseDto: CreateFormResponseDto) {
    return this.formResponseService.create(createFormResponseDto);
  }

  @Get('mediaRequest/:mediaRequestId')
  findAll(@Param('mediaRequestId') mediaRequestId: string) {
    return this.formResponseService.findAll(mediaRequestId);
  }

  @Get(':formResponseId')
  findOne(@Param('formResponseId') formResponseId: string) {
    return this.formResponseService.findOne(+formResponseId);
  }
}
