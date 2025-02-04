import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditorState, ContentState } from "draft-js";

interface TextEditorState {
  content: EditorState;
}

const initialState: TextEditorState = {
  content: EditorState.createEmpty(),
};

const textEditorSlice = createSlice({
  name: "textEditor",
  initialState,
  reducers: {
    updateContent: (state, action: PayloadAction<EditorState>) => {
      state.content = action.payload;
    },
    setUserContent: (state, action: PayloadAction<string>) => {
      state.content = EditorState.createWithContent(ContentState.createFromText(action.payload));
    },
  },
});

export const { updateContent, setUserContent } = textEditorSlice.actions;
export default textEditorSlice.reducer;
