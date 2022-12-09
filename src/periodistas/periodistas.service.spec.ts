import { Test, TestingModule } from '@nestjs/testing';
import { PeriodistasService } from './periodistas.service';

describe('PeriodistasService', () => {
  let service: PeriodistasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeriodistasService],
    }).compile();

    service = module.get<PeriodistasService>(PeriodistasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
