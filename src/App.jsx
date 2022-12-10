import React from "react";
import { Grid } from "@mui/material";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Location from "./components/Location";
import Search from "./components/Search";

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
          padding: "4% 8%",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          l={2}
          sx={{
            backgroundColor: "#FFF",
            padding: "4em",
            borderRadius: "50px 0 0 50px",
          }}
        >
          <Search />
          <Location />
          <Current />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          l={10}
          sx={{
            backgroundColor: "#F7F6F9",
            padding: "4em",
            borderRadius: "0 50px 50px 0",
          }}
        >
          <Forecast />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
