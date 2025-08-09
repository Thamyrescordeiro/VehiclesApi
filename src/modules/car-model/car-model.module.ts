import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarModelService } from './car-model.service';
import { CarModelController } from './car-model.controller';
import { CarModel } from './car-model.entity';
import { Brand } from '../brand/brand.entity';
import { Vehicles } from '../vehicle/vehicle.entity';

@Module({
  imports: [SequelizeModule.forFeature([CarModel, Brand, Vehicles])],
  providers: [CarModelService],
  controllers: [CarModelController],
  exports: [CarModelService],
})
export class CarModelModule {}
