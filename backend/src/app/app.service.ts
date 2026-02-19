import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  apiMessage(): string {
    return 'Welcome to Spark API!';
  }
}
