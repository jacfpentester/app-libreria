import { Test, TestingModule } from '@nestjs/testing';
import { RevistasService } from './revistas.service';

describe('RevistasService', () => {
  let service: RevistasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RevistasService],
    }).compile();

    service = module.get<RevistasService>(RevistasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
