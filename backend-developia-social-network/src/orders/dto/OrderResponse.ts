export interface OrderResponse {
    orderId: string;
    status: "pending" | "paid" | "failed" | "shipped" | "delivered";
    totalPrice: number;
    createdAt: string;
    estimatedDelivery?: string;
    payment: {
      method: "card" | "paypal" | "cod";
      status: "pending" | "paid" | "failed";
      transactionId?: string;
    };
    customer: {
      email: string;
      firstName: string;
      lastName: string;
    };
    items: {
      productId: string;
      name: string;
      quantity: number;
      price: number;
    }[];
  }