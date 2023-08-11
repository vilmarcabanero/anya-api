import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from './users.service'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  // Later, you'll add methods for user validation, JWT creation, etc.

  async register(email: string, password: string): Promise<any> {
    await this.usersService.create(email, password)
    return { message: 'User registered successfully!' }
  }

  async login(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email)
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { email: user.email, sub: user.id }
      return {
        access_token: this.jwtService.sign(payload),
      }
    } else {
      throw new UnauthorizedException('Invalid credentials')
    }
  }
}
