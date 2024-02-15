import { Injectable } from '@nestjs/common';
import { CreateMediaRequestFormMappingDto } from './dto/create-media-request-form-mapping.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MediaRequestFormMapping } from './entities/media-request-form-mapping.entity';
import { Repository } from 'typeorm';
import { Form } from 'src/form/entities/form.entity';
import { FormResponseService } from 'src/form-response/form-response.service';
import { CommonProviderService } from 'src/common-provider/common-provider.service';

@Injectable()
export class MediaRequestFormMappingService {
  constructor(
    @InjectRepository(MediaRequestFormMapping)
    private repository: Repository<MediaRequestFormMapping>,
    private formResponseService: FormResponseService,
    private commonProviderSerivce: CommonProviderService,
  ) {}

  async create(
    createMediaRequestFormMappingDto: CreateMediaRequestFormMappingDto,
  ) {
    const mediaRequestId = createMediaRequestFormMappingDto.mediaRequestId;
    const data = createMediaRequestFormMappingDto.formVersionIds.map(
      (formVersionId) => {
        return {
          mediaRequestId,
          form: { formVersionId } as Form,
        };
      },
    );
    const result = await this.repository.save(data);
    await this.formResponseService.initialCreate({
      mediaRequestFormMappingIds: result.map(
        (e) => e.mediaRequestFormMappingId,
      ),
    });

    return result;
  }

  findAllByMediaRequest(mediaRequestId: string) {
    return this.commonProviderSerivce.findAllByMediaRequest(mediaRequestId);
  }

  findAllByIds(mediaRequestFormMappingIds: number[]) {
    return this.findAllByIds(mediaRequestFormMappingIds);
  }
}
