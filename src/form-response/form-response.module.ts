import { Module } from '@nestjs/common';
import { FormResponseService } from './form-response.service';
import { FormResponseController } from './form-response.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormResponse } from './entities/form-response.entity';
import { CommonProviderModule } from 'src/common-provider/common-provider.module';

@Module({
  imports: [TypeOrmModule.forFeature([FormResponse]), CommonProviderModule],
  controllers: [FormResponseController],
  providers: [FormResponseService],
  exports: [FormResponseService],
})
export class FormResponseModule {}
