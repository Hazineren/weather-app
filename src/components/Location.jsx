import { Skeleton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectWeatherData } from "../context/weatherSlice";

const Location = () => {
  const { location, loading, status, error } = useSelector(selectWeatherData);

  let content;
  if (loading) content = <Skeleton>Location</Skeleton>;
  else if (error) content = <>{status}</>;
  else if (location)
    content = (
      <div className="region">
        <span className="regionContent">
          <p>
            {location.name},{location.country}
          </p>
          <p>{location.localtime.split(" ").slice(1)}</p>
        </span>
      </div>
    );
  return <>{content}</>;
};

export default Location;
