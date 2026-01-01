
export class CreateOrderDto {
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
      price: number; // на случай пересчёта на бэке
    }[];
    payment: {
      method: "card" | "paypal" | "cod"; // тип оплаты
      cardNumber?: string; // если method = "card"
      expiry?: string;
      cvv?: string;
    };
    notes?: string; // комментарий к заказу
  }