import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/AuthSlice";
import BasketSlice from "../features/BasketSlice";
import ProductSlice from "../features/ProductSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    product: ProductSlice,
    basket:BasketSlice,
  },
});
export default store;
