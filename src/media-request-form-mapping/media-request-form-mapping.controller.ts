import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MediaRequestFormMappingService } from './media-request-form-mapping.service';
import { CreateMediaRequestFormMappingDto } from './dto/create-media-request-form-mapping.dto';

@Controller('media-request-form-mapping')
export class MediaRequestFormMappingController {
  constructor(
    private readonly mediaRequestFormMappingService: MediaRequestFormMappingService,
  ) {}

  @Post()
  create(
    @Body() createMediaRequestFormMappingDto: CreateMediaRequestFormMappingDto,
  ) {
    return this.mediaRequestFormMappingService.create(
      createMediaRequestFormMappingDto,
    );
  }

  @Get('/:mediaRequestId')
  findAll(@Param('mediaRequestId') mediaRequestId: string) {
    return this.mediaRequestFormMappingService.findAllByMediaRequest(
      mediaRequestId,
    );
  }
}
