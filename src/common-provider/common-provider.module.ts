import { Module } from '@nestjs/common';
import { CommonProviderService } from './common-provider.service';
import { CommonProviderController } from './common-provider.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MediaRequestFormMapping } from 'src/media-request-form-mapping/entities/media-request-form-mapping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MediaRequestFormMapping])],
  controllers: [CommonProviderController],
  providers: [CommonProviderService],
  exports: [CommonProviderService],
})
export class CommonProviderModule {}
