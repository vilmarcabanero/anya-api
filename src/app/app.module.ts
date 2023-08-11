import { Module } from '@nestjs/common'
import { AppController } from '@/app/api/controllers/app.controller'
import { AppService } from '@/app/application/app.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
