import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { BrandModule } from './modules/brand/brand.module';
import { CarModelModule } from './modules/car-model/car-model.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { LoggerMiddleware } from './shared/middlewares/logger.middleware';
import { BodyFormatingMiddleware } from './shared/middlewares/bodyformating.middleware';
import { AuthMiddleware } from './shared/middlewares/auth.middleware';

@Module({
  imports: [
    AuthModule,
    UserModule,
    VehicleModule,
    BrandModule,
    CarModelModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('brand', 'vehicle', 'car-model');
    consumer.apply(BodyFormatingMiddleware).forRoutes('*');
    
  }
}
