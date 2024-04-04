import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { configService } from './configeService';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    // TypeOrmModule.forRoot({
    //   type: process.env.DB_TYPE as any,
    //   host: process.env.PG_HOST,
    //   port: parseInt(process.env.PG_PORT),
    //   username: process.env.PG_USER,
    //   password: process.env.PG_PASSWORD,
    //   database: process.env.DATABASE,
    //   entities: [__dirname+"/**/*.entity{.ts,.js}"], //entities: [User],
    //   synchronize: true,
    // })
    TypeOrmModule.forRoot(configService.getTypeOrmConfig())

  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
