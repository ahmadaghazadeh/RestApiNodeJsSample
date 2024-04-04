import { DataSource, DataSourceOptions } from 'typeorm';

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

export const dataSourceOptions: DataSourceOptions={
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ["dist/**/*.entity.js"], //entities: [User],
  migrations:["dist/db/migrations/*.js"]
}

const dataSource = new DataSource(dataSourceOptions)
  
export default dataSource;