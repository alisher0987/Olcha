// store.js
import { configureStore } from '@reduxjs/toolkit';
import likeReducer from './likeSlice/';  // Import the likeSlice reducer

// Configure the Redux store
export const store = configureStore({
  reducer: {
    likes: likeReducer,  // Attach the reducer to manage 'likes' state
  },
});
