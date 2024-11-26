import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#5a2b4f",
              contrastText: "#faf4f9",
            },
            secondary: {
              main: "#ca91a5",
              contrastText: "#150a12",
            },
            divider: "#a04b5f",
            text: {
              primary: "rgb(21, 10, 18)",
              secondary: "rgba(21, 10, 18, 0.6)",
              disabled: "rgba(21, 10, 18, 0.38)",
              hint: "rgb(160, 75, 95)",
            },
            background: {
              default: "#faf4f9",
            },
          }
        : {
            primary: {
              main: "#d4a5c9",
              contrastText: "#0a050a",
            },
            secondary: {
              main: "#6e3549",
              contrastText: "#f5eaf2",
            },
            divider: "#b45f73",
            text: {
              primary: "rgb(245, 234, 242)",
              secondary: "rgba(245, 234, 242, 0.6)",
              disabled: "rgba(245, 234, 242, 0.38)",
              hint: "rgb(180, 95, 115)",
            },
            background: {
              default: "#0a050a",
            },
          }),
    },
  });
