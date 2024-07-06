// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice/ProductSlice";
import authReducer from "./AuthSlice/AuthSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
});

export default store;
