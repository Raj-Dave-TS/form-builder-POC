import { Test, TestingModule } from '@nestjs/testing';
import { MediaRequestFormMappingService } from './media-request-form-mapping.service';

describe('MediaRequestFormMappingService', () => {
  let service: MediaRequestFormMappingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MediaRequestFormMappingService],
    }).compile();

    service = module.get<MediaRequestFormMappingService>(MediaRequestFormMappingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
