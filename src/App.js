import React from "react";
import { CssBaseline } from "@mui/material";
import { ColorModeProvider } from "./theme/ThemeContext";
import Header from "./components/Header";

const App = () => (
  <ColorModeProvider>
    <CssBaseline />
    <Header />
    {/* Other components */}
  </ColorModeProvider>
);

export default App;
