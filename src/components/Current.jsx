import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../context/weatherSlice";
import iconsJSON from "../api/icons.json";

import { Grid, Skeleton, Typography } from "@mui/material";

const Current = () => {
  const { current, loading, status, error } = useSelector(selectWeatherData);

  let content;
  if (loading)
    content = (
      <div>
        <Skeleton variant="circular" width={200} height={200} />
        <Skeleton variant="text" width={200} />
        <Skeleton variant="text" />
      </div>
    );
  if (error) content = <>{status}</>;
  else if (current)
    content = (
      <div>
        <figure>
          <img
            src={
              iconsJSON.find(
                (icon) =>
                  icon.code === current.condition.code &&
                  icon.icon.hasOwnProperty(current.is_day)
              )?.icon[current.is_day]
            }
            width="200px"
            alt={current.condition.text}
          ></img>
        </figure>
        <Typography variant="h2">{Math.round(current.temp_c)}&deg;C</Typography>
        <Typography variant="h4">{current.condition.text}</Typography>
        <Grid sx={currentStyles.cloudGrid}>
          <Typography variant="body1">{current.cloud}%</Typography>
          <figure>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3262/3262935.png"
              alt="current_cloud"
              style={{
                width: "50px",
                filter: "grayscale(100%)",
              }}
            />
          </figure>
        </Grid>
      </div>
    );
  return <>{content}</>;
};

const currentStyles = {
  cloudGrid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
  },
};

export default Current;
