import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FormModule } from './form/form.module';
import { OrganizationModule } from './organization/organization.module';
import { Organization } from './organization/entities/organization.entity';
import { Form } from './form/entities/form.entity';
import { FormResponseModule } from './form-response/form-response.module';
import { MediaRequestFormMappingModule } from './media-request-form-mapping/media-request-form-mapping.module';
import { FormResponse } from './form-response/entities/form-response.entity';
import { MediaRequestFormMapping } from './media-request-form-mapping/entities/media-request-form-mapping.entity';
import { CommonProviderModule } from './common-provider/common-provider.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '52.90.230.170',
      port: 5432,
      username: 'postgres',
      password: 'P@ssw0rd',
      database: 'postgres',
      synchronize: true,
      logging: true,
      entities: [Form, Organization, FormResponse, MediaRequestFormMapping],
    }),
    FormModule,
    OrganizationModule,
    FormResponseModule,
    MediaRequestFormMappingModule,
    CommonProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
