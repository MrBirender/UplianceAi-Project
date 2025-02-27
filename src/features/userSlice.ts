import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;

}

const getInitialUser = (): UserState => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) :
   { id: "", name: "", email: "", phone: "", address: "" };
};

const initialState: UserState = getInitialUser();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      const newState = { ...state, ...action.payload, id: state.id || `USER-${Date.now()}` };
      localStorage.setItem("user", JSON.stringify(newState));
      
      return newState;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
