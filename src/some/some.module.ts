import { Module } from '@nestjs/common';
import { NarangoModule } from '@ronatilabs/narango';

import { SomeService } from './some.service';
import { SomeController } from './some.controller';

@Module({
  imports: [
    NarangoModule.register({
      database: {
        url: 'http://localhost:8295',
        databaseName: 'Test',
        auth: {
          username: 'user',
          password: 'password',
        },
      },
    }),
  ],
  controllers: [SomeController],
  providers: [SomeService],
})
export class SomeModule { }
