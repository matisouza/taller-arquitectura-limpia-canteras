import { Controller, Get } from '@nestjs/common';
import { PrgressService } from './prgress.service';

@Controller()
export class PrgressController {
  constructor(private readonly prgressService: PrgressService) {}

  @Get()
  getHello(): string {
    return this.prgressService.getHello();
  }
}
