import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Ziraat Team from Mustafa AKGİLLİ!';
  }
}
