import { Controller, Get } from '@nestjs/common';

@Controller('empleados')
export class EmpleadosController {
  @Get()
  getAllEmpleados() {
    return 'este metodo retorna todos los empleados';
  }
}