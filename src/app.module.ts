import { Module } from '@nestjs/common';
import { RevistasModule } from './revistas/revistas.module';
import { SucursalesModule } from './sucursales/sucursales.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { PeriodistasModule } from './periodistas/periodistas.module';

@Module({
  imports: [
    RevistasModule,
    EmpleadosModule,
    SucursalesModule,
    PeriodistasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
