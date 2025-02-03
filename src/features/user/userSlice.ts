import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface UserState {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const initialState: UserState = {
  id: localStorage.getItem("userID") || crypto.randomUUID(), // Generate unique ID
  name: localStorage.getItem("userName") || "",
  address: localStorage.getItem("userAddress") || "",
  email: localStorage.getItem("userEmail") || "",
  phone: localStorage.getItem("userPhone") || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      Object.assign(state, action.payload);
      localStorage.setItem("userID", state.id);
      localStorage.setItem("userName", state.name);
      localStorage.setItem("userAddress", state.address);
      localStorage.setItem("userEmail", state.email);
      localStorage.setItem("userPhone", state.phone);
    },
  },
});

export const { updateUser } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
