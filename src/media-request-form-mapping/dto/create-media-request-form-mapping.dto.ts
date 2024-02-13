// Dada KI Jay Ho

import { IsArray, IsNumber } from 'class-validator';

export class CreateMediaRequestFormMappingDto {
  @IsNumber()
  mediaRequestId: number;

  @IsArray()
  formVersionIds: number[];
}
