import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { routes } from './app.routes';
import { V1Module } from './modules/v1/v1.module';
import { AppController } from './app.controller';
import 'source-map-support/register';

@Module({
  imports: [RouterModule.forRoutes(routes), V1Module],
  controllers: [AppController],
})
export class AppModule {}
