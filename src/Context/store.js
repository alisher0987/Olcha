import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import likeReducer from "./likeSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
      Wishies: likeReducer
    }
});