import { Module } from '@nestjs/common';
import { PeriodistasController } from './periodistas.controller';
import { PeriodistasService } from './periodistas.service';

@Module({
  imports: [],
  controllers: [PeriodistasController],
  providers: [PeriodistasService],
})
export class PeriodistasModule {}
