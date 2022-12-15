import { Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../context/weatherSlice";
import getDate from "../helpers/getDate";
import icons from "../helpers/images";

const Forecast = () => {
  const { forecast, loading, status, error } = useSelector(selectWeatherData);
  let content;

  if (loading)
    content = <Skeleton variant="rounded" animation="wave" height={200} />;
  else if (error) content = <>{status}</>;
  else if (forecast)
    content = (
      <Grid sx={forecastStyles.flex}>
        {forecast.map((item, index) => (
          <Grid key={index} sx={forecastStyles.itemGrid}>
            <Typography variant="h5">{getDate(item.date)}</Typography>
            <img
              src={icons[`1${item.day.condition.text}`]}
              alt={item.day.condition.text}
              width="70px"
            ></img>
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <p>{Math.round(item.day.maxtemp_c)}&deg;</p>
              <p style={{ color: "lightgray" }}>
                {Math.round(item.day.mintemp_c)}&deg;
              </p>
            </span>
          </Grid>
        ))}
      </Grid>
    );
  return <>{content}</>;
};

export default Forecast;

const forecastStyles = {
  flex: {
    display: "flex",
    flexDirection: "row",
    overflow: "auto",
    alignItems: "center",
    textAlign: "center",
    justifyContent: { md: "space-between" },
    gap: "20px",    
    width: {xl: "70%"},
    margin: {xs: "1em",xl: "0 auto"},
  },
  itemGrid: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    minWidth: "150px",
    padding: "1em"
  },
};
