import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../context/weatherSlice";
import getDate from "../helpers/getDate";
import iconsJSON from "../api/icons.json";

import {
  Grid,
  Skeleton,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const Forecast = () => {
  const { forecast, loading, status, error } = useSelector(selectWeatherData);
  let content;

  if (loading)
    content = <Skeleton variant="rounded" animation="wave" height={200} />;
  else if (error) content = <>{status}</>;
  else if (forecast)
    content = (
      <Grid sx={forecastStyles.container}>
        {forecast.map((item, index) => (
          <Card key={index} sx={forecastStyles.cardContainer}>
            <Typography variant="h5">{getDate(item.date)}</Typography>
            <CardMedia
              component="img"
              image={
                iconsJSON.find(
                  (icon) =>
                    icon.code === item.day.condition.code &&
                    icon.icon.hasOwnProperty("1")
                )?.icon["1"]
              }
              alt={item.day.condition.text}
              sx={{ width: 70 }}
            />
            <CardContent sx={forecastStyles.cardContent}>
              <Typography variant="body1" color="text.primary">
                {Math.round(item.day.maxtemp_c)}&deg;
              </Typography>
              <Typography variant="body1" color="text.grey">
                {Math.round(item.day.mintemp_c)}&deg;
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    );
  return <>{content}</>;
};

export default Forecast;

const forecastStyles = {
  container: {
    display: "flex",
    overflow: "auto",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "15px",
    gap: "0.5rem",
    margin: "0.5rem",
    paddingTop: "2rem",
    minWidth: "150px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
  },
};
