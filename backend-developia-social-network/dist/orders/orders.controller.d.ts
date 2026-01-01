import { OrdersService } from './orders.service';
import type { CreateOrderDto } from './dto/create-order.dto';
import type { OrderResponse } from './dto/OrderResponse';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): OrderResponse;
}
