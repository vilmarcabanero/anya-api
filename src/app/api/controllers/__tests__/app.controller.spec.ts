import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from '@/app/api/controllers/app.controller'
import { AppService } from '@/app/application/app.service'

describe('AppController', () => {
  let controller: AppController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    controller = module.get<AppController>(AppController)
  })

  it('should return an object with a message indicating the API is up and running', () => {
    expect(controller.healthcheck()).toEqual({
      message: 'Anya API is up and running!',
    })
  })
})
