import { Injectable } from '@nestjs/common'
import { HealthcheckResponseDto } from '@/api/dtos/healthcheckResponseDto'

@Injectable()
export class AppService {
  healthcheck() {
    return new HealthcheckResponseDto('Anya API is up and running!')
  }
}
