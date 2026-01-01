import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

const cartData: any = {
  items: [
    {
      id: 1,
      title: "Ноутбук Lenovo IdeaPad 5",
      slug: "lenovo-ideapad-5",
      image: "https://dummyimage.com/300x200/000/fff&text=Lenovo",
      price: 1200,
      quantity: 1,
      discount: 0.1, // 10%
      totalPrice: 1080, // (1200 - 10%) * 1
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
      discount: 0.05, // 5%
      totalPrice: 1898.1, // (999 - 5%) * 2
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
      discount: 0, // без скидки
      totalPrice: 400,
      stock: 50,
      variant: "Black",
    },
  ],
  totalItems: 4, // 1 + 2 + 1
  subtotal: 1200 + 999 * 2 + 400, // 3598
  discountTotal: 120 + 99.9, // 219.9
  totalPrice: 3378.1, // 3598 - 219.9
  currency: "USD",
  deliveryPrice: 20,
  couponCode: "SALE2025",
};

@Injectable()
export class CartService {
  create(createCartDto: CreateCartDto) {
    return 'This action adds a new cart';
  }

  findAll() {
    return cartData;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }


  addProductToCard(productId: string): any {
    cartData.items.push(
      {
        id: Math.random(),
        title: "Rolex",
        slug: "rolex",
        image: "https://cdn.wristler.eu/blog-image-2x/e1d5f908798e411773695b7b6980ba4a-",
        price: 30000,
        quantity: 1,
        discount: 0, // 10%
        totalPrice: 30000, // (1200 - 10%) * 1
        stock: 15,
        variant: "",
      }
    )
    return cartData.items

  }
}
