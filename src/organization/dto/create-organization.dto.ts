import { IsNumber, IsString } from 'class-validator';

export class CreateOrganizationDto {
  @IsNumber()
  organizationId: number;

  @IsString()
  name: string;
}
