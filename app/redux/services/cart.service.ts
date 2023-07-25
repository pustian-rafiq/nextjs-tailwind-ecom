import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
};

export const cartApi = createApi({
  reducerPath: "cartApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/products",
  }),
  endpoints: (builder) => ({}),
});

export const {} = cartApi;
export const { endpoints, reducerPath, reducer, middleware } = cartApi;
