import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
//import { TypeOrmModule } from '@nestjs/typeorm';
//import { Connection } from 'typeorm';
//import { User } from './users/user.entity';
//import { UsersModule } from './users/users.module';

@Module({
  //imports: [TypeOrmModule.forRoot(), UsersModule],
  controllers: [AppController, CatsController],
  providers: [ AppService, CatsService],
})
export class AppModule {}

