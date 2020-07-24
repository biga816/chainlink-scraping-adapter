import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { IAdapterResponse, AdapterStatus } from '@interfaces/adapter-response';
import { GetQueryDto } from './dto/get-query.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async get(
    @Query() { id, url, path, filter, type }: GetQueryDto,
  ): Promise<IAdapterResponse> {
    try {
      let data = await this.appService.scrape(url, path);

      if (filter && data) {
        data = this.appService.filterContent(data['content'], filter);
      }

      if (type && data) {
        data = data
          .filter(value => typeof value === type)
          .map(value => (type === 'string' ? value.trim() : value))
          .filter(value => !!value);
      }

      return {
        jobRunID: id,
        data: data || null,
      };
    } catch (error) {
      console.error(error);
      return {
        jobRunID: id,
        status: AdapterStatus.ERRORED,
        error: 'Internal Server Error',
      };
    }
  }
}
