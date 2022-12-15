import { Skeleton, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../context/weatherSlice";
import icons from "../helpers/images";

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
        {loading ? (
          <Skeleton variant="circular" width={200} height={200} />
        ) : (
          <figure>
            <img
              src={icons[`${current.is_day}${current.condition.text}`]}
              width="200px"
              alt={current.condition.text}
            ></img>
          </figure>
        )}
        {loading ? (
          <Skeleton variant="text" width={200} />
        ) : (
          <Typography variant="h2">
            {Math.round(current.temp_c)}&deg;C
          </Typography>
        )}
        {loading ? (
          <Skeleton variant="text" />
        ) : (
          <Typography variant="h4">{current.condition.text}</Typography>
        )}
        {loading ? (
          <Skeleton variant="text" />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <p>{current.cloud}%</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3262/3262935.png"
              alt="current_cloud"
              style={{
                margin: "0 1em",
                width: "50px",
                filter: "grayscale(100%)",
              }}
            />
          </div>
        )}
      </div>
    );
  return <>{content}</>;
};

export default Current;
