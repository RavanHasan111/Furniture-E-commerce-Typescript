import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/api/baseQuery";
import type { CartData } from "../model/types";


export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: baseQuery,
  tagTypes: ['Cart'], // Добавляем тип тега для кеширования
  endpoints: (builder) => ({
    getCartData: builder.query<CartData, void>({
      query: () => "/cart",
      transformResponse: (response: CartData) => {
        console.log("Raw API response:", response);
        return response;
      },
      // Добавляем обработку ошибок
      transformErrorResponse: (response) => {
        console.error("API Error:", response);
        return response;
      },
      providesTags: ['Cart'], // Кеширование
    }),

 
  }),
});

export const { useGetCartDataQuery } = cartApi;