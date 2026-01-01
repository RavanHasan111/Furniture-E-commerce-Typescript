import { CreateOrderDto } from './dto/create-order.dto';
import { OrderResponse } from './dto/OrderResponse';
export declare class OrdersService {
    create(createOrderDto: CreateOrderDto): OrderResponse;
}
