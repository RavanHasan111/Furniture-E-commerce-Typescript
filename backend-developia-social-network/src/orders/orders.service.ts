import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderResponse } from './dto/OrderResponse';

@Injectable()
export class OrdersService {
  create(createOrderDto: CreateOrderDto): OrderResponse {

    const orderResponse: OrderResponse = {
      orderId: "ORD123456",
      status: "paid",
      totalPrice: 250,
      createdAt: new Date().toISOString(),
      estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // через 5 дней
      payment: {
        method: "card",
        status: "paid",
        transactionId: "TXN7891011"
      },
      customer: {
        email: "john.doe@example.com",
        firstName: "John",
        lastName: "Doe"
      },
      items: [
        {
          productId: "P001",
          name: "Product One",
          quantity: 2,
          price: 50
        },
        {
          productId: "P002",
          name: "Product Two",
          quantity: 3,
          price: 50
        }
      ]
    };
    
    
    return orderResponse;
  }

  // findAll() {
  //   return `This action returns all orders`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} order`;
  // }

  // update(id: number, updateOrderDto: UpdateOrderDto) {
  //   return `This action updates a #${id} order`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} order`;
  // }
}
