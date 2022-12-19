import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../context/weatherSlice";

import { Grid, Skeleton, Typography } from "@mui/material";

const Location = () => {
  const { location, loading, status, error } = useSelector(selectWeatherData);

  let content;
  if (loading)
    content = (
      <Skeleton sx={{ borderRadius: "15px" }} width={300} height={200} />
    );
  else if (error) content = <>{status}</>;
  else if (location)
    content = (
      <Grid sx={locationStyles.container}>
        <Typography color="text.white">
          {location.name},{location.country}
        </Typography>
        <p>{location.localtime.split(" ").slice(1)}</p>
      </Grid>
    );
  return <>{content}</>;
};

const locationStyles = {
  container: {
    position: "relative",
    background: 'url("https://picsum.photos/id/327/400")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "1.2em",
    borderRadius: "15px",
    color: "#fff",
    width: "100%",
    "::before": {
      content: "''",
      position: "absolute",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
      borderRadius: "15px",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    "> *": {
      position: "relative",
      textAlign: "right",
      lineHeight: "1.5",
    },
  },
};

export default Location;
