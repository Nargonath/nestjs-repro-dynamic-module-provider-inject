import { Injectable } from '@nestjs/common';
import { NarangoService } from '@ronatilabs/narango';

@Injectable()
export class SomeService {
  constructor(private narango: NarangoService) { }
}
