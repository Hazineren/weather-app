import React from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { selectWeatherData } from "../context/weatherSlice";
import { useSelector } from "react-redux";
import { Grid, Skeleton } from "@mui/material";

const TodayDetail = () => {
  const { forecast, current, loading, status, error } =
    useSelector(selectWeatherData);

  const air_index = {
    1: "Good",
    2: "Moderate",
    3: "Unhealthy",
    4: "Unhealthy",
    5: "Very Unhealthy",
    6: "Hazardous",
  };
  let content;
  if (loading) content = <Skeleton>TodayDetail</Skeleton>;
  else if (error) content = <>{status}</>;
  else if (current) {
    content = (
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          alignContent: "flex-start",
          margin: "2em",
          gap: "1em",
        }}
      >
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          l={3}
          style={{
            backgroundColor: "#fff",
            margin: "0 0.5em",
            padding: "0.5em 2em",
            borderRadius: "15px",
          }}
        >
          <h3>Wind Status</h3>
          <NavigationIcon
            fontSize="inherit"
            color="primary"
            sx={{
              fontSize: "50px",
              transform: `rotate(${current.wind_degree}deg)`,
            }}
          />
          <LocationOnOutlinedIcon
            fontSize="inherit"
            color="primary"
            sx={{
              fontSize: "50px",
              transform: `rotate(${current.wind_degree + 180}deg)`,
            }}
          />
          <p>{current.wind_dir}</p>
          <p>{current.wind_kph}km/h</p>
        </Grid>
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          l={3}
          style={{
            backgroundColor: "#fff",
            margin: "0 0.5em",
            padding: "0.5em 2em",
            borderRadius: "15px",
          }}
        >
          <h3>Air Quality</h3>
          <p>{air_index[current.air_quality["us-epa-index"]]}</p>
          {current.air_quality > 3 ? <div>a</div> : <div>b</div>}
          <img src="https://cdn-icons-png.flaticon.com/512/3741/3741046.png" alt="air_quality" width={"50px"} />
        </Grid>
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          l={3}
          style={{            
            backgroundColor: "#fff",
            margin: "0 0.5em",
            padding: "0.5em 2em",
            borderRadius: "15px",
          }}
        >
          <h3>Sunrise & Sunset</h3>
          <p>{forecast[0].astro.sunset}</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8098/8098355.png"
            alt="sunset"
            width={"50px"}
          />
          <p>{forecast[0].astro.sunrise}</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8098/8098358.png"
            alt="sunrise"
            width={"50px"}
          />
        </Grid>
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          l={3}
          style={{
            backgroundColor: "#fff",
            margin: "0 0.5em",
            padding: "0.5em 2em",
            borderRadius: "15px",
          }}
        >
          <h3>Visibility</h3>
          <p>{current.vis_km}km</p>          
        </Grid>
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          l={3}
          style={{
            backgroundColor: "#fff",
            margin: "0 0.5em",
            padding: "0.5em 2em",
            borderRadius: "15px",
          }}
        >
          <h3>Humidity</h3>
          <p>{current.humidity}%</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3262/3262970.png"
            alt="humidity"
            width={"50px"}
          />
        </Grid>
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          l={3}
          style={{
            backgroundColor: "#fff",
            margin: "0 0.5em",
            padding: "0.5em 2em",
            borderRadius: "15px",
          }}
        >
          <h3>Precipitation</h3>
          <img src="https://cdn-icons-png.flaticon.com/512/3262/3262912.png" alt="precipitation" width={"50px"} />
          <p>{current.precip_mm}%</p>
        </Grid>
      </Grid>
    );
  }
  return <>{content}</>;
};

export default TodayDetail;
