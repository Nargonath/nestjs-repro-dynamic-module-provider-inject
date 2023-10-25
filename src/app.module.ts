import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SomeModule } from './some/some.module';

@Module({
  imports: [SomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
