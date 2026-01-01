import { CartService } from './cart.service';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    findAll(): any;
    addProductToCard(productId: string): any;
}
