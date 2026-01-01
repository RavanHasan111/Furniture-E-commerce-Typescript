"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const cartData = {
    items: [
        {
            id: 1,
            title: "Ноутбук Lenovo IdeaPad 5",
            slug: "lenovo-ideapad-5",
            image: "https://dummyimage.com/300x200/000/fff&text=Lenovo",
            price: 1200,
            quantity: 1,
            discount: 0.1,
            totalPrice: 1080,
            stock: 15,
            variant: "16GB RAM, 512GB SSD",
        },
        {
            id: 2,
            title: "Смартфон iPhone 14",
            slug: "iphone-14",
            image: "https://dummyimage.com/300x200/000/fff&text=iPhone+14",
            price: 999,
            quantity: 2,
            discount: 0.05,
            totalPrice: 1898.1,
            stock: 30,
            variant: "128GB, Blue",
        },
        {
            id: 3,
            title: "Наушники Sony WH-1000XM5",
            slug: "sony-wh-1000xm5",
            image: "https://dummyimage.com/300x200/000/fff&text=Sony+XM5",
            price: 400,
            quantity: 1,
            discount: 0,
            totalPrice: 400,
            stock: 50,
            variant: "Black",
        },
    ],
    totalItems: 4,
    subtotal: 1200 + 999 * 2 + 400,
    discountTotal: 120 + 99.9,
    totalPrice: 3378.1,
    currency: "USD",
    deliveryPrice: 20,
    couponCode: "SALE2025",
};
let CartService = class CartService {
    create(createCartDto) {
        return 'This action adds a new cart';
    }
    findAll() {
        return cartData;
    }
    findOne(id) {
        return `This action returns a #${id} cart`;
    }
    update(id, updateCartDto) {
        return `This action updates a #${id} cart`;
    }
    remove(id) {
        return `This action removes a #${id} cart`;
    }
    addProductToCard(productId) {
        cartData.items.push({
            id: Math.random(),
            title: "Rolex",
            slug: "rolex",
            image: "https://cdn.wristler.eu/blog-image-2x/e1d5f908798e411773695b7b6980ba4a-",
            price: 30000,
            quantity: 1,
            discount: 0,
            totalPrice: 30000,
            stock: 15,
            variant: "",
        });
        return cartData.items;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)()
], CartService);
//# sourceMappingURL=cart.service.js.map