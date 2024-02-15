import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MediaRequestFormMapping } from 'src/media-request-form-mapping/entities/media-request-form-mapping.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class CommonProviderService {
  constructor(
    @InjectRepository(MediaRequestFormMapping)
    private repository: Repository<MediaRequestFormMapping>,
  ) {}

  findAllByMediaRequest(mediaRequestId: string) {
    return this.repository.find({
      where: { mediaRequestId },
      relations: { form: true },
    });
  }

  findAllByIds(mediaRequestFormMappingIds: number[]) {
    return this.repository.find({
      where: { mediaRequestFormMappingId: In(mediaRequestFormMappingIds) },
      relations: { form: true },
    });
  }
}
