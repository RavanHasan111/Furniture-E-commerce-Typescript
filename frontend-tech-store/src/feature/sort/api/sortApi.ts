import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/api/baseQuery";
import type { Product } from "../../../entities/product/model/types";
import type { SortParams } from "../model/types";

export const sortApi = createApi({
  reducerPath: "sortApi",
  baseQuery: baseQuery,
  tagTypes: ['SortedProducts'],
  endpoints: (builder) => ({
    getSortedProducts: builder.query<Product[], SortParams>({
      query: ({ sortBy, order }) => ({
        url: "/products",
        params: {
          sortBy,
          order,
        },
      }),
      transformResponse: (response: Product[]) => {
        console.log("Sorted products response:", response);
        return response;
      },
      providesTags: ['SortedProducts'],
    }),
  }),
});

export const { useGetSortedProductsQuery } = sortApi;
