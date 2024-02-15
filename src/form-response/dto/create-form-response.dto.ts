import { IsArray, IsString } from 'class-validator';

export class CreateFormResponseDto {
  @IsArray()
  mediaRequestFormMappingId: number;

  @IsString()
  data: string;
}
