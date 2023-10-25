import { Controller } from '@nestjs/common';
import { SomeService } from './some.service';

@Controller('some')
export class SomeController {
  constructor(private readonly someService: SomeService) {}
}
