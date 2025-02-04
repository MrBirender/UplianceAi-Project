import React from "react";
import { Grid, Paper, Box } from "@mui/material";
import Counter from "../components/Counter";
import UserForm from "../components/UserForm";
import RichTextEditor from "../components/RichTextEditor";
import { useSpring, animated } from "react-spring";

const Home: React.FC = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 } });

  return (
    <animated.div style={fadeIn}>
      <Grid container spacing={3} sx={{ height: "100vh", padding: 3, mx: "auto" }}>
        {/* Upper Section: Counter & User Form */}
        <Grid item xs={12} md={5}>
          <Paper elevation={2} sx={{ padding: 3, height: "90%" }}>
            <Counter />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3, height: "100%" }}>
            <UserForm />
          </Paper>
        </Grid>

        {/* Bottom Section: Rich Text Editor (Full Width) */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 3, height: "100%" }}>
            <RichTextEditor />
          </Paper>
        </Grid>
      </Grid>
    </animated.div>
  );
};

export default Home;
