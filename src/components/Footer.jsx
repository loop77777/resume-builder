import React from "react";
import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="static"
      component="footer"
      sx={{ top: "auto", bottom: 0, padding: 2 }}
    >
      <Toolbar
        className="w-auto mx-12"
        sx={{ flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="body1" align="center" sx={{ flexGrow: 1 }}>
          © {new Date().getFullYear()} Deep's Resume Builder
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Terms of Service
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Contact
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
