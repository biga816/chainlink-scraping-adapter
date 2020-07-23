import { Controller, Get, Query } from '@nestjs/common';
import { WebScrapingService } from './web-scraping.service';
import { IAdapterResponse } from '@interfaces/adapter-response';

@Controller('web-scraping')
export class WebScrapingController {
  constructor(private readonly webScrapingService: WebScrapingService) {}

  @Get()
  async get(
    @Query() { id, url, path, filter, type }: any,
  ): Promise<IAdapterResponse> {
    let data = await this.webScrapingService.scrap(url, path);

    if (filter) {
      data = this.webScrapingService.filterContent(data['content'], filter);
    }

    if (type) {
      data = data
        .filter(value => typeof value === type)
        .map(value => (type === 'string' ? value.trim() : value))
        .filter(value => !!value);
    }

    return {
      jobRunID: id,
      data,
    };
  }
}
