import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/api/baseQuery";
import type { ProfileResponse } from "../model/type";


export const profileApi = createApi({
  reducerPath: "profiletApi",
  baseQuery: baseQuery,
  tagTypes: ['Profile'],
  endpoints: (builder) => ({
    getProfileInfo: builder.query<ProfileResponse, void>({
      query: () => "/profile",
      transformResponse: (response: ProfileResponse) => {
        console.log("Raw API response:", response);
        return response;
      },
      // Добавляем обработку ошибок
      transformErrorResponse: (response) => {
        console.error("API Error:", response);
        return response;
      },
      providesTags: ['Profile'], // Кеширование
    }),

  }),
});

export const { useGetProfileInfoQuery } = profileApi;