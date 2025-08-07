import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { DatabaseModule } from './database/database.module';
import { BrandModule } from './modules/brand/brand.module';

@Module({
  imports: [DatabaseModule, UserModule, BrandModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
