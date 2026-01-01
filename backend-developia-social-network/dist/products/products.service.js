"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products = [
    {
        id: 1,
        title: "Essence Mascara Lash Princess",
        description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects.",
        category: "beauty",
        price: 9.99,
        discountPercentage: 7.17,
        rating: 4.94,
        stock: 5,
        tags: ["beauty", "mascara"],
        brand: "Essence",
        sku: "RCH45Q1A",
        weight: 2,
        dimensions: { width: 23.17, height: 14.43, depth: 28.01 },
        warrantyInformation: "1 month warranty",
        shippingInformation: "Ships in 1 month",
        availabilityStatus: "Low Stock",
        reviews: [
            {
                rating: 2,
                comment: "Very unhappy with my purchase!",
                date: "2024-05-23T08:56:21.618Z",
                reviewerName: "John Doe",
                reviewerEmail: "john.doe@x.dummyjson.com"
            }
        ],
        returnPolicy: "30 days return policy",
        minimumOrderQuantity: 24,
        meta: {
            createdAt: "2024-05-23T08:56:21.618Z",
            updatedAt: "2024-05-23T08:56:21.618Z",
            barcode: "9164035109868",
            qrCode: "https://example.com/qrcode1"
        },
        thumbnail: "https://example.com/thumbnail1.jpg",
        images: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]
    },
    {
        id: 2,
        title: "Apple iPhone 15",
        description: "The latest iPhone with A17 chip, improved camera and longer battery life.",
        category: "electronics",
        price: 1199,
        discountPercentage: 5,
        rating: 4.8,
        stock: 20,
        tags: ["electronics", "phone", "apple"],
        brand: "Apple",
        sku: "APL-IP15",
        weight: 200,
        dimensions: { width: 7.1, height: 14.7, depth: 0.8 },
        warrantyInformation: "1 year manufacturer warranty",
        shippingInformation: "Ships in 3 days",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Amazing phone, very fast and sleek!",
                date: "2025-01-12T10:15:00.000Z",
                reviewerName: "Alice Smith",
                reviewerEmail: "alice.smith@example.com"
            }
        ],
        returnPolicy: "14 days return policy",
        minimumOrderQuantity: 1,
        meta: {
            createdAt: "2025-01-01T09:00:00.000Z",
            updatedAt: "2025-01-10T12:00:00.000Z",
            barcode: "1234567890123",
            qrCode: "https://example.com/qrcode2"
        },
        thumbnail: "https://example.com/thumbnail2.jpg",
        images: ["https://example.com/image3.jpg", "https://example.com/image4.jpg"]
    },
    {
        id: 3,
        title: "Nike Air Max 270",
        description: "Comfortable and stylish sneakers for everyday wear.",
        category: "fashion",
        price: 150,
        discountPercentage: 10,
        rating: 4.6,
        stock: 50,
        tags: ["fashion", "shoes", "nike"],
        brand: "Nike",
        sku: "NIK-AIR270",
        weight: 800,
        dimensions: { width: 10, height: 12, depth: 30 },
        warrantyInformation: "6 months warranty",
        shippingInformation: "Ships in 1 week",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 4,
                comment: "Very comfortable and good quality.",
                date: "2024-11-05T15:30:00.000Z",
                reviewerName: "Bob Johnson",
                reviewerEmail: "bob.johnson@example.com"
            }
        ],
        returnPolicy: "30 days return policy",
        minimumOrderQuantity: 1,
        meta: {
            createdAt: "2024-10-01T08:00:00.000Z",
            updatedAt: "2024-10-15T10:00:00.000Z",
            barcode: "9876543210987",
            qrCode: "https://example.com/qrcode3"
        },
        thumbnail: "https://example.com/thumbnail3.jpg",
        images: ["https://example.com/image5.jpg", "https://example.com/image6.jpg"]
    },
    {
        id: 4,
        title: "Samsung Galaxy S24",
        description: "Latest Samsung flagship smartphone with advanced AI features.",
        category: "electronics",
        price: 999,
        discountPercentage: 8,
        rating: 4.7,
        stock: 15,
        tags: ["electronics", "phone", "samsung"],
        brand: "Samsung",
        sku: "SAM-GS24",
        weight: 196,
        dimensions: { width: 7.0, height: 14.7, depth: 0.8 },
        warrantyInformation: "1 year manufacturer warranty",
        shippingInformation: "Ships in 2 days",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Excellent camera quality and performance!",
                date: "2025-01-08T14:20:00.000Z",
                reviewerName: "Emma Wilson",
                reviewerEmail: "emma.wilson@example.com"
            }
        ],
        returnPolicy: "14 days return policy",
        minimumOrderQuantity: 1,
        meta: {
            createdAt: "2025-01-01T10:00:00.000Z",
            updatedAt: "2025-01-08T16:00:00.000Z",
            barcode: "1122334455667",
            qrCode: "https://example.com/qrcode4"
        },
        thumbnail: "https://example.com/thumbnail4.jpg",
        images: ["https://example.com/image7.jpg", "https://example.com/image8.jpg"]
    },
    {
        id: 5,
        title: "Adidas Ultraboost 22",
        description: "Premium running shoes with responsive cushioning.",
        category: "fashion",
        price: 180,
        discountPercentage: 15,
        rating: 4.9,
        stock: 30,
        tags: ["fashion", "shoes", "adidas", "running"],
        brand: "Adidas",
        sku: "ADI-UB22",
        weight: 750,
        dimensions: { width: 10.5, height: 12, depth: 30 },
        warrantyInformation: "6 months warranty",
        shippingInformation: "Ships in 3 days",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 5,
                comment: "Best running shoes I've ever owned!",
                date: "2024-12-20T11:45:00.000Z",
                reviewerName: "Mike Davis",
                reviewerEmail: "mike.davis@example.com"
            }
        ],
        returnPolicy: "30 days return policy",
        minimumOrderQuantity: 1,
        meta: {
            createdAt: "2024-11-15T07:30:00.000Z",
            updatedAt: "2024-12-01T09:15:00.000Z",
            barcode: "5566778899001",
            qrCode: "https://example.com/qrcode5"
        },
        thumbnail: "https://example.com/thumbnail5.jpg",
        images: ["https://example.com/image9.jpg", "https://example.com/image10.jpg"]
    },
    {
        id: 6,
        title: "L'Oreal Paris Foundation",
        description: "Long-lasting foundation with natural finish.",
        category: "beauty",
        price: 24.99,
        discountPercentage: 12,
        rating: 4.3,
        stock: 25,
        tags: ["beauty", "makeup", "foundation"],
        brand: "L'Oreal",
        sku: "LOR-FOUND",
        weight: 35,
        dimensions: { width: 5, height: 12, depth: 3 },
        warrantyInformation: "No warranty",
        shippingInformation: "Ships in 5 days",
        availabilityStatus: "In Stock",
        reviews: [
            {
                rating: 4,
                comment: "Good coverage and stays on all day.",
                date: "2024-10-15T13:20:00.000Z",
                reviewerName: "Sarah Brown",
                reviewerEmail: "sarah.brown@example.com"
            }
        ],
        returnPolicy: "14 days return policy",
        minimumOrderQuantity: 1,
        meta: {
            createdAt: "2024-09-01T12:00:00.000Z",
            updatedAt: "2024-10-01T14:30:00.000Z",
            barcode: "9988776655443",
            qrCode: "https://example.com/qrcode6"
        },
        thumbnail: "https://example.com/thumbnail6.jpg",
        images: ["https://example.com/image11.jpg", "https://example.com/image12.jpg"]
    }
];
let ProductsService = class ProductsService {
    create(createProductDto) {
        return 'This action adds a new product';
    }
    findAll(sortParams, filterParams) {
        let filteredProducts = [...products];
        if (filterParams) {
            if (filterParams.category) {
                filteredProducts = filteredProducts.filter(product => product.category === filterParams.category);
            }
            if (filterParams.brand) {
                filteredProducts = filteredProducts.filter(product => product.brand === filterParams.brand);
            }
            if (filterParams.minRating !== undefined) {
                filteredProducts = filteredProducts.filter(product => product.rating >= filterParams.minRating);
            }
            if (filterParams.maxRating !== undefined) {
                filteredProducts = filteredProducts.filter(product => product.rating <= filterParams.maxRating);
            }
        }
        const sortBy = sortParams.sortBy || 'price';
        const order = sortParams.order || 'asc';
        if (sortBy === 'price') {
            filteredProducts.sort((a, b) => order === 'asc' ? a.price - b.price : b.price - a.price);
        }
        return filteredProducts;
    }
    findOne(id) {
        return products.find(product => product.id === id);
    }
    getCategories() {
        const categories = [...new Set(products.map(product => product.category))];
        return categories.sort();
    }
    getBrands() {
        const brands = [...new Set(products.map(product => product.brand))];
        return brands.sort();
    }
    update(id, updateProductDto) {
        return `This action updates a #${id} product`;
    }
    remove(id) {
        return `This action removes a #${id} product`;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=products.service.js.map