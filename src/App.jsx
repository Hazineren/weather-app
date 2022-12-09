import React from "react";
import { useSelector } from "react-redux";
import { useGetWeatherByCityQuery } from "./context/weatherApi";
import { Grid } from "@mui/material";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import Location from "./components/Location";
import Search from "./components/Search";

const App = () => {
  const searchCity = useSelector((state) => state.weather.searchCity);

  const {
    data: weather,
    error,
    isError,
    isLoading,
  } = useGetWeatherByCityQuery(searchCity);
  console.log(weather);
  let content;
  if (isLoading) content = <div>Loading...</div>;
  else if (isError) content = <p>{error.toString()}</p>;
  else if (weather)
    content = (
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
          <Location location={weather.location} />
          <Current current={weather.current} />
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
          <Forecast forecast={weather.forecast.forecastday} />
        </Grid>
      </Grid>
    );

  return <>{content}</>;
};

export default App;
