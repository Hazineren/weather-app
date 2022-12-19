import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { selectWeatherData } from "../context/weatherSlice";
import { useSelector } from "react-redux";

import {
  Grid,
  Skeleton,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";

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
      <Grid container sx={todayDetailStyles.container}>
        <Typography variant="h4">Today's Highlights</Typography>
        <Grid sx={todayDetailStyles.gridCards}>
          <Card sx={todayDetailStyles.card}>
            <CardHeader title="Wind Status" />
            <CardContent>
              <Grid item sx={todayDetailStyles.gridFlexCenter}>
                <LocationOnOutlinedIcon
                  fontSize="inherit"
                  color="info"
                  sx={{
                    fontSize: "50px",
                    transform: `rotate(${current.wind_degree + 180}deg)`,
                  }}
                />
                <Typography gutterBottom variant="body1">
                  {current.wind_dir}
                </Typography>
              </Grid>
              <Typography gutterBottom variant="body1">
                {current.wind_kph}km/h
              </Typography>
            </CardContent>
          </Card>
          <Card sx={todayDetailStyles.card}>
            <CardHeader title="Air Quality" />
            <CardContent>
              <Typography gutterBottom variant="body1">
                {air_index[current.air_quality["us-epa-index"]]}
              </Typography>
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
            </CardContent>
          </Card>
          <Card sx={todayDetailStyles.card}>
            <CardHeader title="Sunrise & Sunset" />
            <CardContent>
              <Grid item sx={todayDetailStyles.gridFlexCenter}>
                <Typography gutterBottom variant="body1">
                  {forecast[0].astro.sunrise}
                </Typography>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8098/8098355.png"
                  alt="sunset"
                  height={"50px"}
                  width={"50px"}
                />
              </Grid>
              <Grid sx={{ display: "flex", justifyContent: "center" }}>
                <Typography>{forecast[0].astro.sunset}</Typography>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8098/8098358.png"
                  alt="sunrise"
                  width={"50px"}
                  height={"50px"}
                />
              </Grid>
            </CardContent>
          </Card>
          <Card sx={todayDetailStyles.card}>
            <CardHeader title="Visibility" />
            <CardContent>
              <Grid item sx={todayDetailStyles.gridFlexCenter}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5261/5261895.png"
                  alt="visibility"
                  width={50}
                  style={{ transform: `rotate(270deg)` }}
                />
                <Typography gutterBottom variant="body1">
                  {current.vis_km}km
                </Typography>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={todayDetailStyles.card}>
            <CardHeader title="Humidity" />
            <CardContent>
              <Grid item sx={todayDetailStyles.gridFlexCenter}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3262/3262970.png"
                  alt="humidity"
                  width={"50px"}
                />
                <Typography gutterBottom variant="body1">
                  {current.humidity}%
                </Typography>
              </Grid>
            </CardContent>
          </Card>
          <Card sx={todayDetailStyles.card}>
            <CardHeader title="Precipitation" />
            <CardContent>
              <Grid item sx={todayDetailStyles.gridFlexCenter}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3262/3262912.png"
                  alt="precipitation"
                  width={"50px"}
                />
                <Typography gutterBottom variant="body1">
                  {current.precip_mm}mm
                </Typography>
              </Grid>
            </CardContent>
          </Card>
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
    flexDirection: "column",
  },
  gridCards: {
    display: "flex",
    flexWrap: { lg: "wrap" },
    justifyContent: "center",
    gap: "0 1rem",
    maxWidth: "1100px",
  },
  card: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "15px",
    minWidth: { md: "300px" },
    minHeight: "240px",
    margin: "0.5rem 0",
    padding: "1.5rem",
  },
  gridFlexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
};
