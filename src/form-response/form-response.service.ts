import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormResponse } from './entities/form-response.entity';
import { DataSource, Repository } from 'typeorm';
import { MediaRequestFormMapping } from 'src/media-request-form-mapping/entities/media-request-form-mapping.entity';
import { InitialCreateFormResponseDto } from './dto/intiial-create-form-response.dto copy';
import { CreateFormResponseDto } from './dto/create-form-response.dto';
import { CommonProviderService } from 'src/common-provider/common-provider.service';

@Injectable()
export class FormResponseService {
  constructor(
    @InjectRepository(FormResponse)
    private formResponseRepository: Repository<FormResponse>,
    private readonly commonProviderService: CommonProviderService,
    private readonly dataSource: DataSource,
  ) {}

  async initialCreate(
    initialCreateFormResponseDto: InitialCreateFormResponseDto,
  ) {
    const mediaRequestFormMappingIds =
      initialCreateFormResponseDto.mediaRequestFormMappingIds;

    const formData = (
      await this.commonProviderService.findAllByIds(mediaRequestFormMappingIds)
    ).map((each) => each.form.data);

    const formResponses: FormResponse[] = [];

    mediaRequestFormMappingIds.forEach(
      async (mediaRequestFormMappingId, index) => {
        formResponses.push(
          this.formResponseRepository.create({
            mediaRequestFormMapping: {
              mediaRequestFormMappingId,
            } as MediaRequestFormMapping,
            data: formData[index],
          }),
        );
      },
    );

    return await this.formResponseRepository.save(formResponses);
  }

  async create(createFormResponseDto: CreateFormResponseDto) {
    return await this.formResponseRepository.save({
      data: createFormResponseDto.data,
      mediaRequestFormMapping: {
        mediaRequestFormMappingId:
          createFormResponseDto.mediaRequestFormMappingId,
      } as MediaRequestFormMapping,
    });
  }

  async findAll(mediaRequestId: string) {
    const responses = await this.formResponseRepository.find({
      where: { mediaRequestFormMapping: { mediaRequestId } },
      relations: { mediaRequestFormMapping: true },
    });

    // const responses = await this.dataSource
    //   .getRepository(FormResponse)
    //   .createQueryBuilder('fr')
    //   .leftJoinAndSelect('fr.mediaRequestFormMapping', 'mrfm')
    //   .where(`mrfm."mediaRequestId" = '${mediaRequestId}'`)
    //   // .orderBy({
    //   //   'fr.createdAt': 'DESC',
    //   // })
    //   .groupBy('mrfm."mediaRequestFormMappingId"')
    //   .select('mrfm."mediaRequestFormMappingId"')
    //   // .select(
    //   //   'DISTINCT ON (mrfm."mediaRequestFormMappingId", fr."createdAt") mrfm.*',
    //   // )
    //   // .addSelect('fr.*')
    //   .getRawMany();

    return responses;
  }

  findOne(formResponseId: number) {
    return this.formResponseRepository.findOne({ where: { formResponseId } });
  }
}
