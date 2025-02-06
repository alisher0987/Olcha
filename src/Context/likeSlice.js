// likeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],  // Initialize the value as an empty array
};

const likeSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    incCart: (state, action) => {
      state.value.push(action.payload);  // Example logic for incCart
    },
    addToLike: (state, action) => {
      state.value.push(action.payload);  // Add to like logic
    },
    removeFromLike: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload.id);  // Remove from like logic
    },
  },
});

export const { incCart, addToLike, removeFromLike } = likeSlice.actions;
export default likeSlice.reducer;  // This exports the reducer as the default export
