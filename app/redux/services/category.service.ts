import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Category = {
  category: string[];
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/products",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Category[], any>({
      query: (queryParam: string) => `${queryParam}`,
    }),
    getProductById: builder.query<any, any>({
      query: (id) => `/${id}`,
    }),
    getProductsByCategory: builder.query<any, any>({
      query: (category: string) => `/category/${category}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} = productsApi;
export const { endpoints, reducerPath, reducer, middleware } = productsApi;
