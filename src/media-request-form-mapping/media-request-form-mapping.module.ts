import { Module } from '@nestjs/common';
import { MediaRequestFormMappingService } from './media-request-form-mapping.service';
import { MediaRequestFormMappingController } from './media-request-form-mapping.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaRequestFormMapping } from './entities/media-request-form-mapping.entity';
import { CommonProviderModule } from 'src/common-provider/common-provider.module';
import { FormResponseModule } from 'src/form-response/form-response.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MediaRequestFormMapping]),
    CommonProviderModule,
    FormResponseModule,
  ],
  controllers: [MediaRequestFormMappingController],
  providers: [MediaRequestFormMappingService],
  exports: [MediaRequestFormMappingService],
})
export class MediaRequestFormMappingModule {}
