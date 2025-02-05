import { useNavigate } from "react-router";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ backgroundColor: "#4a6fa5", paddingY: 1 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 4 }}>
          <Typography
            variant="h6"
            sx={{
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "0.2s ease-in-out",
              },
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            sx={{
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05)",
                transition: "0.2s ease-in-out",
              },
            }}
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
