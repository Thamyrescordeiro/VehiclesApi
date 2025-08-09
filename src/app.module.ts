import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';
import { CarModelModule } from './modules/car-model/car-model.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { Brand } from './modules/brand/brand.entity';

@Module({
  imports: [DatabaseModule, UserModule, Brand, CarModelModule, VehicleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
