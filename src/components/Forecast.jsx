import { Skeleton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../context/weatherSlice";

const Forecast = () => {
  const { forecast, loading, status, err } = useSelector(selectWeatherData);
  let content;
  if (loading) content = <Skeleton>Forecast</Skeleton>;
  else if (err) content = <>{status}</>;
  else if (forecast)
    content = (
      <>
        {forecast.map((item, index) => (
          <div key={index}>
            <h3>{item.date}</h3>
            <img src={item.day.condition.icon}></img>
          </div>
        ))}
      </>
    );  
  return <>{content}</>;
};

export default Forecast;
