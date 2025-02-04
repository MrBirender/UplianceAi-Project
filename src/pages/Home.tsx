import React from "react";
import { Box } from "@mui/material";
import Counter from "../components/Counter";
import UserForm from "../components/UserForm";
import RichTextEditor from "../components/RichTextEditor";
import { useSpring, animated } from "react-spring";

const Home: React.FC = () => {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 } });

  return (
    <animated.div style={fadeIn}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 2,
          height: "calc(100vh - 64px)", // This will ensure space is available for padding
          padding: "32px 40px", // 32px padding on top and bottom, 40px on left and right
          boxSizing: "border-box", // Ensure padding is accounted for in height calculation
          // Responsive design for different screen sizes:
          "@media (max-width: 1200px)": {
            gridTemplateColumns: "1fr 2fr", // Maintain the 2-column layout on medium screens (like tablets)
            gap: 2, // Proper spacing for tablets
          },
          "@media (max-width: 1024px)": {
            gridTemplateColumns: "1fr 1fr", // Keep 2 columns layout for larger tablets/laptops
            padding: "24px 30px", // Adjust padding for tablet screens
            gap: 3, // Increase gap on tablet screens
          },
          "@media (max-width: 768px)": {
            gridTemplateColumns: "1fr", // Stack components on smaller screens (mobile)
            padding: "16px 20px", // Adjust padding for mobile
            gap: 3, // Increase gap for better spacing on smaller screens
          },
          "@media (max-width: 480px)": {
            padding: "12px 16px", // Adjust for very small mobile screens
          },
        }}
      >
        {/* Left Side: Counter & Form (Stacked) */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, height: "100%" }}>
          <Counter />
          <UserForm />
        </Box>

        {/* Right Side: Rich Text Editor */}
        <Box sx={{ height: "100%" }}>
          <RichTextEditor />
        </Box>
      </Box>
    </animated.div>
  );
};

export default Home;
