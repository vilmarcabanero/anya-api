import { Controller, Get } from '@nestjs/common'
import { AppService } from '@/app/application/app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthcheck() {
    return this.appService.healthcheck()
  }
}
