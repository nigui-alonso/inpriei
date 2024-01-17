import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  users: any;
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/items')
  //Lee todos los queries
  getItems(@Query() queries): any {
    return queries;
  }

  @Get('api/items/test')
  //Lee solo los queries indicados siempre y cuando no sean muchos
  getEsPar(@Query('esPar') esPar, @Query('test') test): any {
    return { esPar, test };
  }

  @Get('example/:name')
  //Lectura de params
  getParam(@Param() allParams): any {
    return allParams;
  }
}
