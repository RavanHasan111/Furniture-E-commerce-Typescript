import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../../../../entities/product/api/productApi";
import { cartApi } from "../../../../entities/cart/api/cartApi";
import { cartApiFeature } from "../../../../feature/cart/useAddProduct/api/useAddProduct";
import { authApiFeature } from "../../../../feature/auth/model/authApi";
import { cheakoutApiFeature } from "../../../../feature/cheakout/api/cheakoutApi";
import { profileApi } from "../../../../entities/profile/api/profileApi";
import { sortApi } from "../../../../feature/sort/api/sortApi";
import { filterApi } from "../../../../feature/filter/api/filterApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [cartApiFeature.reducerPath]: cartApiFeature.reducer,
    [authApiFeature.reducerPath]: authApiFeature.reducer,
    [cheakoutApiFeature.reducerPath]: cheakoutApiFeature.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [sortApi.reducerPath]: sortApi.reducer,
    [filterApi.reducerPath]: filterApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productApi.middleware, 
      cartApi.middleware, 
      cartApiFeature.middleware,
      authApiFeature.middleware,
      cheakoutApiFeature.middleware,
      profileApi.middleware,
      sortApi.middleware,
      filterApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
