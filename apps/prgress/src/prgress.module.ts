import { Module } from '@nestjs/common';
import { PrgressController } from './prgress.controller';
import { PrgressService } from './prgress.service';

@Module({
  imports: [],
  controllers: [PrgressController],
  providers: [PrgressService],
})
export class PrgressModule {}
