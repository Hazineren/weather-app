import { Skeleton } from "@mui/material";
import React from "react";
import getDate from "../helpers/getDate";

const Current = ({ current }) => {
  let content;
  if (current)
    content = (
      <div>
        <img
          src={current.condition.icon}
          alt={current.condition.text}
          width="150px"          
        />
        <h1 style={{ fontSize: "64px", marginLeft: "1em" }}>
          {current.temp_c}&deg;
        </h1>
        <h3>{getDate(current.last_updated)}</h3>
        <h4>{current.condition.text}</h4>
        <h4>{current.condition}</h4>
      </div>
    );
  else if (!current) content = <Skeleton />;
  return <>{content}</>;
};

export default Current;
