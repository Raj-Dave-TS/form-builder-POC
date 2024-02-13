import { Module } from '@nestjs/common';
import { MediaRequestFormMappingService } from './media-request-form-mapping.service';
import { MediaRequestFormMappingController } from './media-request-form-mapping.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaRequestFormMapping } from './entities/media-request-form-mapping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MediaRequestFormMapping])],
  controllers: [MediaRequestFormMappingController],
  providers: [MediaRequestFormMappingService],
})
export class MediaRequestFormMappingModule {}
