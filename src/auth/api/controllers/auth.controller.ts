import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from '@/auth/application/auth.service'
import { RegisterDto } from '../dtos/register.dto'
import { LoginDto } from '../dtos/login.dto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto.email, registerDto.password)
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.email, loginDto.password)
  }
}
