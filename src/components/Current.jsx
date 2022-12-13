import { Skeleton } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../context/weatherSlice";
import icons from "../helpers/images";

const Current = () => {
  const { current, loading, status, error } = useSelector(selectWeatherData);

  /*const response = fetch(`https://www.weatherapi.com/docs/weather_conditions.json`).then((res)=>res.json()).then((data)=> data);  
  console.log("a1",response );*/
  //<img src={icons[current.condition.text]} width="200px"></img>*/

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
          <h1>{Math.round(current.temp_c)}&deg;C</h1>
        )}
        {loading ? (
          <Skeleton variant="text" />
        ) : (
          <h2>{current.condition.text}</h2>
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
