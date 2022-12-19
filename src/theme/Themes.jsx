import { createTheme, responsiveFontSizes } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1800,
      xxl: 2200,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: grey.A400,
    },
    secondary: {
      main: grey.A100,
    },
    text: {
      primary: "#000",
      grey: "lightgray",
    },
  },
  typography: {
    h1: {
      fontSize: "",
      fontWeight: "",
    },
    subtitle1: {
      fontSize: "4rem",
      fontWeight: 200,
    },
    body1: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
  },
});

export default responsiveFontSizes(theme);
