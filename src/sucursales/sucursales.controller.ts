import { Controller, Get } from '@nestjs/common';
@Controller ('sucursales')
export class SucursalesController {
     @Get()
    getAllSucursales () {
        return 'Este metodo retorna las Sucursales';
    }   
}