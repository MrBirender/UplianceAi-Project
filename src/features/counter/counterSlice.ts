import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  count: Number(localStorage.getItem("counter")) || 0, // Initialize from localStorage
};


const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      localStorage.setItem("counter", state.count.toString());
    },
    decrement: (state) => {
      state.count -= 1;
      localStorage.setItem("counter", state.count.toString());
    },
    reset: (state) => {
      state.count = 0;
      localStorage.setItem("counter", "0");
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;

