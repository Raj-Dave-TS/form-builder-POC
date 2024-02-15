// Dada KI Jay Ho

import { IsArray, IsString } from 'class-validator';

export class CreateMediaRequestFormMappingDto {
  @IsString()
  mediaRequestId: string;

  @IsArray()
  formVersionIds: number[];
}
