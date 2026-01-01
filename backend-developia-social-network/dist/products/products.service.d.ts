import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}
interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}
interface Dimensions {
    width: number;
    height: number;
    depth: number;
}
export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    thumbnail: string;
    images: string[];
}
export type SortOrder = 'asc' | 'desc';
export type SortField = 'price';
export interface SortParams {
    sortBy?: SortField;
    order?: SortOrder;
}
export interface FilterParams {
    category?: string;
    brand?: string;
    minRating?: number;
    maxRating?: number;
}
export declare class ProductsService {
    create(createProductDto: CreateProductDto): string;
    findAll(sortParams: SortParams, filterParams?: FilterParams): Product[];
    findOne(id: number): Product | undefined;
    getCategories(): string[];
    getBrands(): string[];
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
export {};
