import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
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
  if (loading)
    content = (
      <Skeleton
        variant="rounded"
        animation="wave"
        height={400}
        sx={{ marginTop: "4em" }}
      />
    );
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LocationOnOutlinedIcon
              fontSize="inherit"
              color="primary"
              sx={{
                fontSize: "50px",
                transform: `rotate(${current.wind_degree + 180}deg)`,
              }}
            />
            <p>{current.wind_dir}</p>
          </div>
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
          {current.air_quality["us-epa-index"] > 2 ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/3741/3741088.png"
              alt="air_quality_bad"
              style={{ filter: "grayscale(60%)" }}
              width={"50px"}
            />
          ) : (
            <img
              src="https://cdn-icons-png.flaticon.com/512/3741/3741046.png"
              alt="air_quality_good"
              width={"50px"}
            />
          )}
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
          <p>{forecast[0].astro.sunrise}</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8098/8098355.png"
            alt="sunset"
            width={"50px"}
          />
          <p>{forecast[0].astro.sunset}</p>
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5261/5261895.png"
              alt="visibility"
              width={50}
              style={{ transform: `rotate(270deg)` }}
            />
            <p>{current.vis_km}km</p>
          </div>
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
          <img
            src="https://cdn-icons-png.flaticon.com/512/3262/3262970.png"
            alt="humidity"
            width={"50px"}
          />
          <p>{current.humidity}%</p>
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
          <img
            src="https://cdn-icons-png.flaticon.com/512/3262/3262912.png"
            alt="precipitation"
            width={"50px"}
          />
          <p>{current.precip_mm}mm</p>
        </Grid>
      </Grid>
    );
  }
  return <>{content}</>;
};

export default TodayDetail;
