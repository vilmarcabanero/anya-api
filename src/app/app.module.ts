import { Module } from '@nestjs/common'
import { AppController } from '@/app/api/controllers/app.controller'
import { AppService } from '@/app/application/app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from '@/auth/auth.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: 'localhost', // database host
      port: 5432, // database host port
      username: 'postgres', // username
      password: '124124124', // user's password
      database: 'anya_api_local', // name of our database
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // location of our entities in src directory
      synchronize: true, // this will automatically create database tables on every application launch
      logging: true, // enables logging of SQL queries, can be set to 'all' or an array of operations to log
      // additional configuration options can go here, for example, setting up cache
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
