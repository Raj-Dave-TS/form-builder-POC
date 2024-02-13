import { Test, TestingModule } from '@nestjs/testing';
import { MediaRequestFormMappingController } from './media-request-form-mapping.controller';
import { MediaRequestFormMappingService } from './media-request-form-mapping.service';

describe('MediaRequestFormMappingController', () => {
  let controller: MediaRequestFormMappingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediaRequestFormMappingController],
      providers: [MediaRequestFormMappingService],
    }).compile();

    controller = module.get<MediaRequestFormMappingController>(MediaRequestFormMappingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
