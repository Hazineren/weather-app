import React from "react";
import {
  createTheme,
  Grid,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Location from "./components/Location";
import Search from "./components/Search";
import TodayDetail from "./components/TodayDetail";

const App = () => {
  let theme = createTheme({
    typography: {
      htmlFontSize: 16,
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={appStyles.main}>
        <Grid item xs={12} sm={12} md={4} lg={3} sx={appStyles.currentGrid}>
          <Search />
          <Current />
          <Location />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={9} sx={appStyles.forecastGrid}>
          <Forecast />
          <TodayDetail />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;

const appStyles = {
  main: {
    height: {md:"100vh"},
    backgroundColor: "#D6D7DA",
    padding: {
      xs: "4em 0",
      sm: "4em",
      md: "2em 4em",
    },
  },
  currentGrid: {
    backgroundColor: "#FFF",
    padding: {
      xs: "2em",
      sm: "2em 4em",
      md: "2em",
      lg: "4em",
    },
    borderRadius: {
      xs: "50px 50px 0 0",
      md: "50px 0 0 50px",
    },
  },
  forecastGrid: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F7F6F9",
    padding: "2rem",
    borderRadius: {
      xs: "0 0 50px 50px",
      md: "0 50px 50px 0",
    },
  },
};
