import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../features/counterSlice";
import { RootState } from "../app/store";
import { Button, Box, Typography } from "@mui/material";

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.count);

  // Dynamically adjust background opacity based on count
  const backgroundColor = `rgba(0, 150, 136, ${Math.min(0.1 + count * 0.05, 1)})`;

  return (
    <Box
      sx={{
        backgroundColor,
        padding: 4,
        textAlign: "center",
        borderRadius: "8px",
        boxShadow: 3,
      }}
    >
      <Typography variant="h4">Counter</Typography>
      <Typography sx={{ mt:5, mb:-5, font: "bold" }} variant="h1">{count}</Typography>
      <Box mt={10}>
        <Button variant="contained" color="primary" onClick={() => dispatch(increment())} sx={{ mx: 1 }}>
          Increment
        </Button>
        <Button variant="contained" color="secondary" onClick={() => dispatch(decrement())} sx={{ mx: 1 }}>
          Decrement
        </Button>
        <Button variant="contained" color="error" onClick={() => dispatch(reset())} sx={{ mx: 1 }}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
