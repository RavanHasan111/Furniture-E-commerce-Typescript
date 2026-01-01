"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
let OrdersService = class OrdersService {
    create(createOrderDto) {
        const orderResponse = {
            orderId: "ORD123456",
            status: "paid",
            totalPrice: 250,
            createdAt: new Date().toISOString(),
            estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
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
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)()
], OrdersService);
//# sourceMappingURL=orders.service.js.map