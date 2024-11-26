import { AppBar, FormControlLabel, Toolbar, Typography } from "@mui/material";
import { responsiveFontSizes, useTheme } from "@mui/material/styles";
import React, { useContext } from "react";
import { ColorModeContext } from "../theme/ThemeContext";
import { MaterialUISwitch } from "./MaterialUISwitch";

const Header = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme(responsiveFontSizes);

  return (
    <AppBar position="static">
      <Toolbar className="w-auto mx-12">
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Deep's Resume Builder
        </Typography>
        <FormControlLabel
          control={
            <MaterialUISwitch
              checked={theme.palette.mode === "dark"}
              onChange={colorMode.toggleColorMode}
            />
          }
          label={theme.palette.mode === "dark" ? "Dark Mode" : "Light Mode"}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
