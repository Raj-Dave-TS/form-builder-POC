import { Controller } from '@nestjs/common';
import { CommonProviderService } from './common-provider.service';

@Controller('common-provider')
export class CommonProviderController {
  constructor(private readonly commonProviderService: CommonProviderService) {}
}
