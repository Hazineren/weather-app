import React from "react";

import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Location from "./components/Location";
import Search from "./components/Search";
import TodayDetail from "./components/TodayDetail";
import theme from "./theme/Themes";

import { CssBaseline, Grid, ThemeProvider } from "@mui/material";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        component="main"
        bgcolor="primary.main"
        sx={appStyles.container}
      >
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          p={10}
          bgcolor="common.white"
          sx={appStyles.gridCurrent}
        >
          <Search />
          <Current />
          <Location />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          p={5}
          bgcolor="secondary.main"
          sx={appStyles.gridForecast}
        >
          <Forecast />
          <TodayDetail />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;

const appStyles = {
  container: {
    padding: {
      xs: "4rem 0",
      sm: "3rem",
      lg: "3rem 6rem",
    },
  },
  gridCurrent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: {
      xs: "50px 50px 0 0",
      md: "50px 0 0 50px",
    },
  },
  gridForecast: {
    borderRadius: {
      xs: "0 0 50px 50px",
      md: "0 50px 50px 0",
    },
  },
};
