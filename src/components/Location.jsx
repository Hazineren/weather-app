import { Skeleton } from "@mui/material";
import React from "react";

const Location = ({ location }) => {
  let content;
  if (location) content = <div></div>;
  else if (!location) content = <Skeleton />;
  return <>{content}</>;
};

export default Location;
