import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Price } from '../price/price.entity';

export const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'blockchain_price_tracker',
  entities: [Price],
  synchronize: true,
};
