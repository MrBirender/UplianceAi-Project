import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import userReducer from "../features/userSlice";
import textEditorReducer from "../features/textEditorSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    textEditor: textEditorReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
