import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
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
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): string;
    findAll(sortBy?: SortField, order?: SortOrder, category?: string, brand?: string, minRating?: number, maxRating?: number): import("./products.service").Product[];
    getCategories(): string[];
    getBrands(): string[];
    findOne(id: string): import("./products.service").Product | undefined;
    update(id: string, updateProductDto: UpdateProductDto): string;
    remove(id: string): string;
}
