import { Skeleton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../context/weatherSlice";

const Location = () => {
  const { location, loading, status, err } = useSelector(selectWeatherData);
  
  let content;
  if (loading) content = <Skeleton>Location</Skeleton>;
  else if (err) content = <>{status}</>;
  else if (location) content = <>{location.name}</>;
  return <>{content}</>;
};

export default Location;
