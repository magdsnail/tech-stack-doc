import { Context } from '@midwayjs/koa';
import { Controller, Get, Inject } from '@midwayjs/decorator';
import { HomeService } from '../service/home.service';

@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Inject()
  homeService: HomeService;

  @Get('/')
  async home() {
    const result = await this.homeService.getAttr();
    return { success: true, message: 'OK', data: result };
  }
}
