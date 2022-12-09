import { Skeleton } from "@mui/material";
import React from "react";

const Forecast = ({ forecast }) => {
  let content;
  if (forecast) content = <div></div>;
  else if (!forecast) content = <Skeleton />
  return <>{content}</>;
};

export default Forecast;
