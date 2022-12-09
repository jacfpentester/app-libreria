import { Controller, Get } from '@nestjs/common';
@Controller ('revistas')
export class RevistasController {
     @Get()
    getAllRevistas () {
        return 'Este metodo retorna las Revistas';
    }   
}