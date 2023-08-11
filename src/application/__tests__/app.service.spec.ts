import { AppService } from '@/application/app.service'
import { Test, TestingModule } from '@nestjs/testing'

describe('AppService', () => {
  let service: AppService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile()

    service = module.get<AppService>(AppService)
  })

  it('should return an object with a message indicating the API is up and running', () => {
    expect(service.healthcheck()).toEqual({
      message: 'Anya API is up and running!',
    })
  })
})
