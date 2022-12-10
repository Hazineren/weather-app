import { Skeleton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../context/weatherSlice";
import getDate from "../helpers/getDate";

const Current = () => {
  const { current, loading, status, err } = useSelector(selectWeatherData);

  let content;
  if (loading) content = <Skeleton>Current</Skeleton>;
  else if (err) content = <>{status}</>;
  else if (current)
    content = (
      <>
        <h1>{current.temp_c}</h1>
        <h1>{current.condition.text}</h1>
        <img src={current.condition.icon}></img>
      </>
    );
  return <>{content}</>;
};

export default Current;
