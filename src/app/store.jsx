import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/AuthSlice";
import ProductSlice from "../slice/ProductSlice";

const store = configureStore({
    reducer:{
        auth:AuthSlice,
        product:ProductSlice
    }
})
export default store