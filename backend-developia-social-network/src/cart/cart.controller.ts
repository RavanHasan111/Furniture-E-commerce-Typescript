import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import path from 'path';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}



  @Get()
  findAll() {
    return this.cartService.findAll();
  }



  @Post(':id')
  addProductToCard(@Param ('id') productId: string) {
    return this.cartService.addProductToCard(productId);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cartService.remove(+id);
  // }


}
