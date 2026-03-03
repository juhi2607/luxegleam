import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#D4AF37" // Gold
      },
      background: {
        default: "#0f0f0f",
        paper: "#1a1a1a"
      }
    },
    typography: {
      fontFamily: "Playfair Display, serif"
    }
  });