import { PartialType } from '@nestjs/mapped-types';
import { CreateMediaRequestFormMappingDto } from './create-media-request-form-mapping.dto';

export class UpdateMediaRequestFormMappingDto extends PartialType(CreateMediaRequestFormMappingDto) {}
