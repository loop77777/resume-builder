import React from "react";
import { CssBaseline } from "@mui/material";
import { ColorModeProvider } from "./theme/ThemeContext";
import Header from "./components/Header";
import ResumeForm from "./components/ResumeForm";

const App = () => (
  <ColorModeProvider>
    <CssBaseline />
    <Header />
    <ResumeForm />
  </ColorModeProvider>
);

export default App;
