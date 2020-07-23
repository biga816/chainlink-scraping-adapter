import { Module } from '@nestjs/common';
import { WebScrapingModule } from './web-scraping/web-scraping.module';

export const v1Modules = [WebScrapingModule];

@Module({
  imports: v1Modules,
})
export class V1Module {}
