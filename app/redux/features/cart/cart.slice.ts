import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
type CartState = {
  cart_list: any[];
  subTotal: number;
  loading: boolean;
};

const initialState = {
  cart_list: [],
  subTotal: 0,
  loading: false,
} as CartState;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartProductList: (state, action: PayloadAction<any>) => {},
    addToCartProduct: (state, action: PayloadAction<any>) => {
      const isExistProduct = state.cart_list.find(
        (product) => product.id === action.payload.id
      );
      if (isExistProduct?.id) {
        toast.warning("This product already exists");
      } else {
        state.subTotal = state.subTotal + action.payload?.price;
        state.cart_list.push({
          ...action.payload,
          quantity: 1,
        });
        toast.success("Product is added to cart successfully");
      }
    },
    removeFromCartProduct: (state, action: PayloadAction<any>) => {
      const removedProduct = state.cart_list.find(
        (product) => product.id === action.payload
      );
      state.cart_list = state.cart_list.filter(
        (product) => product.id !== action.payload
      );
      state.subTotal = removedProduct
        ? state.subTotal - removedProduct?.price
        : state.subTotal;
      toast.success("Product is successfully removed from cart");
    },
    incrementProductQuantity: (state, action: PayloadAction<any>) => {
      let findIndex = state.cart_list.findIndex(
        (product) => product.id === action.payload
      );
      const findProduct = state.cart_list?.find(
        (product) => product.id === action.payload
      );
      if (findIndex === 0) {
        var qty = findProduct?.quantity || 1;
        state.subTotal = state.subTotal + findProduct?.price;
        state.cart_list = [
          {
            ...findProduct,
            quantity: qty + 1,
          },
          ...state.cart_list.slice(findIndex + 1),
        ];
      } else {
        var qty = findProduct?.quantity || 1;
        state.subTotal = state.subTotal + findProduct?.price;
        state.cart_list = [
          ...state.cart_list.slice(0, findIndex),
          {
            ...findProduct,
            quantity: qty + 1,
          },
          ...state.cart_list.slice(findIndex + 1),
        ];
      }
    },
    decrementProductQuantity: (state, action: PayloadAction<any>) => {
      const findDecrementIndex = state.cart_list.findIndex(
        (product) => product.id === action.payload
      );
      const findDecrementProduct = state.cart_list?.find(
        (product) => product.id === action.payload
      );
      if (findDecrementIndex === 0) {
        var qty = findDecrementProduct?.quantity || 1;
        state.subTotal = state.subTotal - findDecrementProduct?.price;
        state.cart_list = [
          {
            ...findDecrementProduct,
            quantity: qty - 1,
          },
          ...state.cart_list.slice(findDecrementIndex + 1),
        ];
      } else {
        var qty = findDecrementProduct?.quantity || 1;
        state.subTotal = state.subTotal - findDecrementProduct?.price;
        state.cart_list = [
          ...state.cart_list.slice(0, findDecrementIndex),
          {
            ...findDecrementProduct,
            quantity: qty - 1,
          },
          ...state.cart_list.slice(findDecrementIndex + 1),
        ];
      }
    },
  },
});

export const {
  addToCartProduct,
  removeFromCartProduct,
  incrementProductQuantity,
  decrementProductQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
