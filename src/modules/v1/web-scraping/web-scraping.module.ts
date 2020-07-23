import { Module } from '@nestjs/common';

import { WebScrapingController } from './web-scraping.controller';
import { WebScrapingService } from './web-scraping.service';

@Module({
  controllers: [WebScrapingController],
  providers: [WebScrapingService],
})
export class WebScrapingModule {}
