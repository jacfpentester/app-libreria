import { Module } from '@nestjs/common';
import { RevistasController } from './revistas.controller';
import { RevistasService } from './revistas.service';

@Module({
  imports: [],
  controllers: [RevistasController],
  providers: [RevistasService],
})
export class RevistasModule {}
