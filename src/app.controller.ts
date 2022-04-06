import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('/data')
  async loadData(@Req() req: any) {
    return await this.appService.loadData(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('check')
  checkToken() {
    return true;
  }
}
