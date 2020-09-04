import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { IAdapterResponse, AdapterStatus } from '@interfaces/adapter-response';
import { GetQueryDto } from './dto/get-query.dto';
import { GetBodyDto } from './dto/get-body.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async get(
    @Query() { id, url, path, index, filter }: GetQueryDto,
  ): Promise<IAdapterResponse> {
    return this.getResponseData(id, url, path, index, filter);
  }

  @Post()
  async post(
    @Body() { id, data: { url, path, index, filter } }: GetBodyDto,
  ): Promise<IAdapterResponse> {
    return this.getResponseData(id, url, path, index, filter);
  }

  private async getResponseData(
    id: string,
    url: string,
    path: string,
    index: number,
    filter: string,
  ): Promise<IAdapterResponse> {
    try {
      let data: any[] | string = await this.appService.scrape(url, path);

      let content: any[] = data['content'];
      if (filter && data) {
        content = this.appService.filterContent(content, filter);
      }

      return {
        jobRunID: id,
        data: content[index] || null,
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
