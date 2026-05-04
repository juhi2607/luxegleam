import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#C9A84C"
      },
      secondary: {
        main: "#1a1a1a"
      },
      background: {
        default: "#faf8f5",
        paper: "#ffffff"
      },
      text: {
        primary: "#1a1a1a",
        secondary: "#666666"
      }
    },
    typography: {
      fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
      h1: { fontWeight: 400, letterSpacing: "0.02em" },
      h2: { fontWeight: 400, letterSpacing: "0.02em" },
      h3: { fontWeight: 400, letterSpacing: "0.02em" },
      h4: { fontWeight: 300, letterSpacing: "0.05em" },
      h5: { fontWeight: 400 },
      h6: { fontWeight: 500 },
      button: {
        fontFamily: "'Montserrat', sans-serif",
        letterSpacing: "0.1em",
        fontWeight: 600
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            textTransform: "uppercase",
            fontSize: "11px",
            letterSpacing: "0.12em"
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            boxShadow: "none"
          }
        }
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "none"
          }
        }
      }
    }
  });
