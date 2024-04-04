import { TypeOrmModuleOptions } from '@nestjs/typeorm';

class ConfigService {

    public getTypeOrmConfig(): TypeOrmModuleOptions {
      return {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        entities: [__dirname+"/**/*.entity{.ts,.js}"], //entities: [User],
        synchronize: true,
      };
    }
  }

  const configService = new ConfigService()
  
  export { configService };