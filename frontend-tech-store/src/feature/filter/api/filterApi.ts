import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/api/baseQuery";
import type { FilterParams } from "../model/types";
import type { Product } from "../../../entities/product/model/types";

export const filterApi = createApi({
  reducerPath: "filterApi",
  baseQuery: baseQuery,
  tagTypes: ['Filter'],
  endpoints: (builder) => ({
    // Получение отфильтрованных продуктов
    getFilteredProducts: builder.query<Product[], FilterParams>({
      query: (filterParams) => ({
        url: "/products",
        params: {
          ...filterParams,
          // Добавляем базовые параметры для пагинации
          limit: 100, // Увеличиваем лимит для отображения всех отфильтрованных продуктов
          skip: 0,
        },
      }),
      transformResponse: (response: Product[]) => {
        console.log("Filtered products response:", response);
        return response;
      },
      transformErrorResponse: (response) => {
        console.error("Filter API Error:", response);
        return response;
      },
      providesTags: ['Filter'],
    }),

    // Получение списка категорий
    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
      transformResponse: (response: string[]) => {
        console.log("Categories response:", response);
        return response;
      },
      transformErrorResponse: (response) => {
        console.error("Categories API Error:", response);
        return response;
      },
      providesTags: ['Filter'],
    }),

    // Получение списка брендов
    getBrands: builder.query<string[], void>({
      query: () => ({
        url: "/products",
        params: {
          limit: 100,
          skip: 0,
        },
      }),
      transformResponse: (response: Product[]) => {
        // Извлекаем уникальные бренды из продуктов
        const brands = [...new Set(response.map(product => product.brand))];
        console.log("Brands response:", brands);
        return brands;
      },
      transformErrorResponse: (response) => {
        console.error("Brands API Error:", response);
        return response;
      },
      providesTags: ['Filter'],
    }),
  }),
});

export const { 
  useGetFilteredProductsQuery, 
  useGetCategoriesQuery, 
  useGetBrandsQuery 
} = filterApi;
