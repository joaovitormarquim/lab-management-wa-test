import { ConnectionOptions } from 'typeorm';
import 'dotenv/config';

const isProduction = process.env.NODE_ENV === 'production';

const config: ConnectionOptions = {
  ssl: isProduction,
  extra: {
    ssl: isProduction ? { rejectUnauthorized: false } : null,
  },
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
  logging: true,
  migrations: [__dirname + '/shared/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/shared/migrations',
  },
};

export = config;
