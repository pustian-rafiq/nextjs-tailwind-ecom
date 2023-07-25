import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import cartReducer from "../redux/features/cart/cart.slice";
import productReducer from "../redux/features/products/products.slice";
import { cartApi } from "./services/cart.service";
import { productsApi } from "./services/product.service";
const combinedReducer: any = combineReducers({
  [productsApi.reducerPath.toString()]: productsApi.reducer,
  [cartApi.reducerPath.toString()]: cartApi.reducer,
  products: productReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: combinedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsApi.middleware]),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const persistor = persistStore(store());

// type Store = ReturnType<typeof store>;

// export type AppStore = ReturnType<typeof store>;
// export type RootState = ReturnType<Store['getState']>;
// export type AppDispatch = Store['dispatch'];
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// export const wrapper = createWrapper<AppStore>(store, { debug: true });
