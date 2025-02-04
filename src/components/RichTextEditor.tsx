import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { useDispatch, useSelector } from "react-redux";
import { updateContent } from "../features/textEditorSlice";
import { RootState } from "../app/store";
import { Button, Box, Paper, Typography } from "@mui/material";

const RichTextEditor: React.FC = () => {
  const dispatch = useDispatch();
  const editorState = useSelector((state: RootState) => state.textEditor.content);

  const handleEditorChange = (newState: EditorState) => {
    dispatch(updateContent(newState));
  };

  const applyStyle = (style: string) => {
    handleEditorChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  return (
    <Paper
      elevation={3}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 4,
        borderRadius: 3,
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Rich Text Editor
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, marginBottom: 2 }}>
        <Button variant="contained" onClick={() => applyStyle("BOLD")}>
          Bold
        </Button>
        <Button variant="contained" onClick={() => applyStyle("ITALIC")}>
          Italic
        </Button>
        <Button variant="contained" onClick={() => applyStyle("UNDERLINE")}>
          Underline
        </Button>
      </Box>
      <Paper
        elevation={1}
        sx={{
          flex: 1,
          padding: 2,
          minHeight: 200,
          cursor: "text",
        }}
      >
        <Editor editorState={editorState} onChange={handleEditorChange} />
      </Paper>
    </Paper>
  );
};

export default RichTextEditor;
