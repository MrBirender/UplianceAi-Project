import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../features/userSlice";
import { setUserContent } from "../features/textEditorSlice";
import { TextField, Button, Box, Typography, Grid, Paper } from "@mui/material";

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
    <Paper elevation={2} sx={{ padding: 3, maxWidth: 600, margin: "auto", borderRadius: 2 }}>
      <Typography variant="h5" align="center" gutterBottom>
        User Information
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="Name" name="name" onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" name="email" type="email" onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Phone" name="phone" type="tel" onChange={handleChange} required />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Address" name="address" onChange={handleChange} required />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Button variant="contained" color="primary" type="submit">
              Save & Display in Editor
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default UserForm;
