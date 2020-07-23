import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root(): { name: string } {
    return { name: 'chainlink-scraping-adapter' };
  }
}
