import { Skeleton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../context/weatherSlice";
//import icons from "../helpers/images";

const Current = () => {
  const { current, loading, status, error } = useSelector(selectWeatherData);

  /*const response = fetch(`https://www.weatherapi.com/docs/weather_conditions.json`).then((res)=>res.json()).then((data)=> data);  
  console.log("a1",response );
  <img src={icons[current.condition.text]} width="200px"></img>*/

  let content;
  if (loading) content = <Skeleton>Current</Skeleton>;
  else if (error) content = <>{status}</>;
  else if (current)
    content = (
      <>
        <figure>
          <img src={current.condition.icon} width="200px" alt={current.condition.text}></img>
        </figure>
        <h1>{Math.round(current.temp_c)}&deg;C</h1>
        <h2>{current.condition.text}</h2>
      </>
    );
  return <>{content}</>;
};

export default Current;
