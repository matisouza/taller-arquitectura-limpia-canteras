import { Test, TestingModule } from '@nestjs/testing';
import { PrgressController } from './prgress.controller';
import { PrgressService } from './prgress.service';

describe('PrgressController', () => {
  let prgressController: PrgressController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PrgressController],
      providers: [PrgressService],
    }).compile();

    prgressController = app.get<PrgressController>(PrgressController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(prgressController.getHello()).toBe('Hello World!');
    });
  });
});
