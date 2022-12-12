import { Skeleton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../context/weatherSlice";
import getDate from "../helpers/getDate";
//import icons from "../helpers/images";

const Forecast = () => {
  const { forecast, loading, status, error } = useSelector(selectWeatherData);
  let content;

  if (loading) content = <Skeleton>Forecast</Skeleton>;
  else if (error) content = <>{status}</>;
  else if (forecast)
    content = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexWrap: "wrap",
          alignContent: "flex-start",
        }}
      >
        {forecast.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              margin: "0 0.5em",
              padding: "0.5em 2em",
              borderRadius: "15px",
            }}
          >
            <h3>{getDate(item.date)}</h3>
            <img src={item.day.condition.icon} alt={item.day.condition.text} width="70px"></img>            
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
          </div>
        ))}
      </div>
    );
  return <>{content}</>;
};

export default Forecast;
