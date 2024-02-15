import { Test, TestingModule } from '@nestjs/testing';
import { CommonProviderController } from './common-provider.controller';
import { CommonProviderService } from './common-provider.service';

describe('CommonProviderController', () => {
  let controller: CommonProviderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommonProviderController],
      providers: [CommonProviderService],
    }).compile();

    controller = module.get<CommonProviderController>(CommonProviderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
