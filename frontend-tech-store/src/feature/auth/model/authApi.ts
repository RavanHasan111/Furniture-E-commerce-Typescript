import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/api/baseQuery";
import { setToken } from "../../../shared/util/token";
import type { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "./type";


export const authApiFeature = createApi({
    reducerPath: "authApiFeature",
    baseQuery: baseQuery,
    tagTypes: ["auth"],
    endpoints: (builder) => ({

        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (data) => ({
                url: `/auth/register`,
                method: "POST",
                body: data,
            }),

            // Обработка успешного ответа
            transformResponse: (response: RegisterResponse) => {
                if (response.token) {
                    setToken(response.token)
                }
                return response;
            },

            // Обработка ошибок
            transformErrorResponse: (response) => {
                console.error("API Error:", response);
                return response;
            },

            invalidatesTags: ["auth"], // сбрасываем кэш после регистрации
        }),

        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (data) => ({
              url: `/auth/login`,
              method: "POST",
              body: data,
            }),
      
            // Если сервер вернул токен — сохраняем
            transformResponse: (response: LoginResponse) => {
              if (response.token) {
                setToken(response.token);
                
              }
              return response;
            },
      
            transformErrorResponse: (response) => {
              console.error("Login API Error:", response);
              return response;
            },
      
            invalidatesTags: ["auth"],
          }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApiFeature;
