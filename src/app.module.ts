import { Module } from '@nestjs/common';
import { EmpleadosController } from './empleados/empleados.controller';
import { PeriodistasController } from './periodistas/periodistas.controller';
import { RevistasController } from './revistas/revistas.controller';
import { SucursalesController } from './sucursales/sucursales.controller';
//import { RevistasController } from './revistas/revistas.controller';
//import { SucursalesController } from './sucursales/sucursales.controller';

@Module({
  imports: [],
  controllers: [EmpleadosController, PeriodistasController, RevistasController, SucursalesController],
  providers: [],
})
export class AppModule {}
