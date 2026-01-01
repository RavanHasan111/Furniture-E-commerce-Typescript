import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product, ProductsQueryParams } from "../model/types";
import { baseQuery } from "../../../shared/api/baseQuery";
import type { SortParams } from "../../../feature/sort/model/types";
import type { FilterParams } from "../../../feature/filter/model/types";


export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQuery,
  tagTypes: ['Product'], // Добавляем тип тега для кеширования
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { sortParams?: SortParams; filterParams?: FilterParams } | void>({
      query: (params) => {
        const queryParams: ProductsQueryParams = {};
        
        if (params?.sortParams) {
          queryParams.sortBy = params.sortParams.sortBy;
          queryParams.order = params.sortParams.order;
        }
        
        if (params?.filterParams) {
          if (params.filterParams.category) queryParams.category = params.filterParams.category;
          if (params.filterParams.brand) queryParams.brand = params.filterParams.brand;
          if (params.filterParams.minRating !== undefined) queryParams.minRating = params.filterParams.minRating;
          if (params.filterParams.maxRating !== undefined) queryParams.maxRating = params.filterParams.maxRating;
        }
        
        return {
          url: "/products",
          params: queryParams,
        };
      },
      transformResponse: (response: Product[]) => {
        console.log("Raw API response:", response);
        return response;
      },
      // Добавляем обработку ошибок
      transformErrorResponse: (response) => {
        console.error("API Error:", response);
        return response;
      },
      providesTags: ['Product'], // Кеширование
    }),

    getProductById: builder.query<Product, string>({
      query: (id: string) => `/products/${id}`,
      transformResponse: (response: Product) => {
        console.log("Raw API response:", response);
        return response;
      },
      // Добавляем обработку ошибок
      transformErrorResponse: (response) => {
        console.error("API Error:", response);
        return response;
      },
      providesTags: ['Product'], // Кеширование
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;