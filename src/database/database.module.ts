import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
import { User } from 'src/modules/user/user.entity';
import { CarModel } from 'src/modules/car-model/car-model.entity';
import { Brand } from 'src/modules/brand/brand.entity';
import { Vehicles } from 'src/modules/vehicle/vehicle.entity';

dotenv.config();
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User, Brand, CarModel, Vehicles],
      logging: true,
      autoLoadModels: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
