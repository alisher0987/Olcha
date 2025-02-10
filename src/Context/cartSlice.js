import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    incCart: (state, action) => {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      } else {
        state.value = state.value.map((item, inx) => {
          if (inx === index) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
      toast.success("Savatga qo'shildi");
    },

    decCart: (state, action) => {
      state.value = state.value.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    removeCart: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.value));
      toast.error("Mahsulot o'chirildi");
    }
  },
});

export const { incCart, decCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;