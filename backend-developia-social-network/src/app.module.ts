import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { PropertiesModule } from './properties/properties.module';
import { CarsModule } from './cars/cars.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PostsModule, ProductsModule, CartModule, PropertiesModule, CarsModule, OrdersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
