import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../features/userSlice";
import { setUserContent } from "../features/textEditorSlice";
import { TextField, Button, Paper, Typography, Stack } from "@mui/material";

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ name: "", email: "", phone: "", address: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setUserData(inputs));
    dispatch(setUserContent(`Name: ${inputs.name}\nEmail: ${inputs.email}\nPhone: ${inputs.phone}\nAddress: ${inputs.address}`));
  };

  return (
    <Paper
      elevation={3}
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 4,
        borderRadius: 3,
        backgroundColor: "background.paper",
      }}
    >
      <Typography color="primary"  variant="h4" align="center" gutterBottom>
        User Information
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} alignItems="center">
          <TextField label="Name" name="name" onChange={handleChange} required sx={{ width: "80%" }} />
          <TextField label="Email" name="email" type="email" onChange={handleChange} required sx={{ width: "80%" }} />
          <TextField label="Phone" name="phone" type="tel" onChange={handleChange} required sx={{ width: "80%" }} />
          <TextField label="Address" name="address" onChange={handleChange} required sx={{ width: "80%" }} />
          <Button variant="contained" color="primary" type="submit" sx={{ width: "60%", fontWeight: "medium" }}>
            Save & Display in Editor
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default UserForm;
