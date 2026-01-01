export declare class CreateOrderDto {
    customer: {
        email: string;
        firstName: string;
        lastName: string;
    };
    shippingAddress: {
        country: string;
        region: string;
        city: string;
        address: string;
        postalCode?: string;
        company?: string;
    };
    items: {
        productId: string;
        quantity: number;
        price: number;
    }[];
    payment: {
        method: "card" | "paypal" | "cod";
        cardNumber?: string;
        expiry?: string;
        cvv?: string;
    };
    notes?: string;
}
