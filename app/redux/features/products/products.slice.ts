import { createSlice } from "@reduxjs/toolkit";

type ProductsState = {
  products: any[];
  product: Object;
};

const initialState: ProductsState = {
  products: [],
  product: {},
} as ProductsState;

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // addToCartProduct: (state, action: PayloadAction<Object>) => {
    //   state.cart_list.push(action?.payload);
    // },
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
