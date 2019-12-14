import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopController } from './shop/shop.controller';
import { DirectoryController } from './directory/directory.controller';

@Module({
  imports: [],
  controllers: [AppController, ShopController, DirectoryController],
  providers: [AppService],
})
export class AppModule {}
