import { Injectable } from '@nestjs/common';

@Injectable()
export class PrgressService {
  getHello(): string {
    return 'Hello World!';
  }
}
