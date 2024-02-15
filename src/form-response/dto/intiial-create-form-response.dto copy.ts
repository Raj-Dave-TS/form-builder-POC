import { IsArray } from 'class-validator';

export class InitialCreateFormResponseDto {
  @IsArray()
  mediaRequestFormMappingIds: number[];
}
