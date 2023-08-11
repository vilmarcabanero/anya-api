import { Module } from '@nestjs/common'
import { AuthService } from '@/auth/application/auth.service'
import { AuthController } from '@/auth/api/controllers/auth.controller'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'foobar', // Use environment variable or a config service
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
