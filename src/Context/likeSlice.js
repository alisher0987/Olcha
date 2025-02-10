import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
  name: "Wishies",
  initialState: {
    value: JSON.parse(localStorage.getItem("wishes")) || [],
  },
  reducers: {
    addToWishies: (state, action) => {
      const isExist = state.value.some((item) => item.id === action.payload.id);
      if (!isExist) {
        state.value.push(action.payload);
        localStorage.setItem("wishes", JSON.stringify(state.value));
      }
    },
    removeFromWishies: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
      localStorage.setItem("wishes", JSON.stringify(state.value));
    }
  },
});

export const { addToWishies, removeFromWishies } = likeSlice.actions;
export default likeSlice.reducer;