import { Injectable } from '@nestjs/common'
import { HealthcheckResponseDto } from 'src/api/dtos/healthcheckResponseDto'

@Injectable()
export class AppService {
  getHello() {
    return new HealthcheckResponseDto('Anya API is up and running!')
  }
}
