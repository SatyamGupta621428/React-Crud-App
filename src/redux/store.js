import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slices/todoSlice"; // Import the reducer from your todoSlice file

// Configure the Redux store
const store = configureStore({
  reducer: {
    todo: todoReducer, // Register the todo reducer
  },
});

export default store;