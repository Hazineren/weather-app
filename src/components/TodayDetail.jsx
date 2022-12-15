import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { selectWeatherData } from "../context/weatherSlice";
import { useSelector } from "react-redux";
import { Grid, Skeleton, Typography } from "@mui/material";

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
      <Grid>
        <Typography variant="h4">Today's Highlights</Typography>
        <Grid sx={todayDetailStyles.container}>
          <Grid item sx={todayDetailStyles.itemGrid}>
            <Typography variant="h5">Wind Status</Typography>
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
          <Grid item sx={todayDetailStyles.itemGrid}>
            <Typography variant="h5">Air Quality</Typography>
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
          <Grid item sx={todayDetailStyles.itemGrid}>
            <Typography variant="h5">Sunrise & Sunset</Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              <p>{forecast[0].astro.sunrise}</p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/8098/8098355.png"
                alt="sunset"
                height={"50px"}
                width={"50px"}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              <p>{forecast[0].astro.sunset}</p>
              <img
                src="https://cdn-icons-png.flaticon.com/512/8098/8098358.png"
                alt="sunrise"
                width={"50px"}
                height={"50px"}
              />
            </div>
          </Grid>
          <Grid item sx={todayDetailStyles.itemGrid}>
            <Typography variant="h5">Visibility</Typography>
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
          <Grid item sx={todayDetailStyles.itemGrid}>
            <Typography variant="h5">Humidity</Typography>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3262/3262970.png"
              alt="humidity"
              width={"50px"}
            />
            <p>{current.humidity}%</p>
          </Grid>
          <Grid item sx={todayDetailStyles.itemGrid}>
            <Typography variant="h5">Precipitation</Typography>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3262/3262912.png"
              alt="precipitation"
              width={"50px"}
            />
            <p>{current.precip_mm}mm</p>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return <>{content}</>;
};

export default TodayDetail;

const todayDetailStyles = {
  container: {
    display: "flex",
    overflow: "auto",
    textAlign: "center",
    flexWrap: { lg: "wrap" },
    padding: "1em 2em",
    gap: {
      xs: "20px",
      lg: "20px 40px",
    },
    maxWidth: { lg: "920px" },
    margin: { lg: "0 auto" },
    justifyContent: { lg: "center" },
  },
  itemGrid: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    minWidth: "240px",
    padding: "2em",
  },
};
