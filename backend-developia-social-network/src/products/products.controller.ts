import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
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

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(
    @Query('sortBy') sortBy?: SortField,
    @Query('order') order?: SortOrder,
    @Query('category') category?: string,
    @Query('brand') brand?: string,
    @Query('minRating') minRating?: number,
    @Query('maxRating') maxRating?: number,
  ) {
    const sortParams: SortParams = {
      sortBy: sortBy || 'price',
      order: order || 'asc',
    };

    const filterParams: FilterParams = {
      category,
      brand,
      minRating,
      maxRating,
    };

    return this.productsService.findAll(sortParams, filterParams);
  }

  @Get('categories')
  getCategories() {
    return this.productsService.getCategories();
  }

  @Get('brands')
  getBrands() {
    return this.productsService.getBrands();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
