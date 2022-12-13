import React from "react";
import { Grid } from "@mui/material";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Location from "./components/Location";
import Search from "./components/Search";
import TodayDetail from "./components/TodayDetail";

const App = () => {
  return (
    <>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#D6D7DA",
          padding: "3em 9em",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          l={3}
          sx={{
            backgroundColor: "#FFF",
            padding: "4em 2em 4em 4em",
            borderRadius: {
              xs: "50px 50px 0 0",
              sm: "50px 50px 0 0",
              md: "50px 0 0 50px",
            },
          }}
        >
          <Search />
          <Current />
          <Location />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={9}
          l={9}
          sx={{
            display: "flex",
            backgroundColor: "#F7F6F9",
            flexDirection: "column",
            padding: "4em",
            borderRadius: "0 50px 50px 0",
          }}
        >
          <Forecast />
          <TodayDetail />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
