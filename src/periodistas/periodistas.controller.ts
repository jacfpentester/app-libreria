import { Controller, Get } from '@nestjs/common';
@Controller('periodistas')
export class PeriodistasController {
  @Get()
  getAllPeriodistas() {
    return 'Este metodo retorna los periodistas';
  }
}
