import { Injectable } from '@nestjs/common';
import { CreateMediaRequestFormMappingDto } from './dto/create-media-request-form-mapping.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MediaRequestFormMapping } from './entities/media-request-form-mapping.entity';
import { Repository } from 'typeorm';
import { Form } from 'src/form/entities/form.entity';

@Injectable()
export class MediaRequestFormMappingService {
  constructor(
    @InjectRepository(MediaRequestFormMapping)
    private repository: Repository<MediaRequestFormMapping>,
  ) {}
  create(createMediaRequestFormMappingDto: CreateMediaRequestFormMappingDto) {
    const mediaRequestId = createMediaRequestFormMappingDto.mediaRequestId;
    const data = createMediaRequestFormMappingDto.formVersionIds.map(
      (formVersionId) => {
        return {
          mediaRequestId,
          form: { formVersionId } as Form,
        };
      },
    );
    return this.repository.save(data);
  }

  findAll(mediaRequestId: number) {
    return this.repository.find({ where: { mediaRequestId } });
  }
}
