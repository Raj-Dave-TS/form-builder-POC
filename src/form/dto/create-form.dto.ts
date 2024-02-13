import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateFormDto {
  @IsNumber()
  organizationId: number;

  @IsNumber()
  @IsOptional()
  formId?: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  data: string;
}
