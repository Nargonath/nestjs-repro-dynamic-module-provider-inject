import { Test, TestingModule } from '@nestjs/testing';
import { SomeController } from './some.controller';
import { SomeService } from './some.service';

describe('SomeController', () => {
  let controller: SomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SomeController],
      providers: [SomeService],
    }).compile();

    controller = module.get<SomeController>(SomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
