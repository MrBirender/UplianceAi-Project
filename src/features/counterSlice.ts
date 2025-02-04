import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getInitialCount = (): number => {
  const savedCount = localStorage.getItem("counter");
  return savedCount ? JSON.parse(savedCount) : 0;
};

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: getInitialCount(),
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      localStorage.setItem("counter", JSON.stringify(state.count));
    },
    decrement: (state) => {
      state.count -= 1;
      localStorage.setItem("counter", JSON.stringify(state.count));
    },
    reset: (state) => {
      state.count = 0;
      localStorage.setItem("counter", JSON.stringify(state.count));
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
