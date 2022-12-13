import {
  CircularProgress,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities, selectSearchData } from "../context/searchSlice";
import { fetchWeather } from "../context/weatherSlice";

const SearchResults = ({ input, show }) => {
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState("istanbul");
  const { cities, loading, status, error } = useSelector(selectSearchData);

  useEffect(() => {    
    if (selectedCity) dispatch(fetchWeather(selectedCity));
  }, [dispatch, selectedCity]);

  useEffect(() => {
    if (input) dispatch(fetchCities(input));
  }, [dispatch, input]);

  let content;
  if (loading)
    content = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          width: "250px",
          height: "250px",
          backgroundColor: "#F7F6F9",
        }}
      >
        <CircularProgress disableShrink />
      </div>
    );
  else if (error) content = <p>{status}</p>;
  else if (!cities)
    content = (
      <Collapse in={show} timeout="auto" unmountOnExit>
        <List
          sx={{
            position: "fixed",
            height: "250px",
            width: "250px",
            color: "#000",
            backgroundColor: "#F7F6F9",
            borderRadius: "0px 0px 15px 15px",
            overflowY: "scroll",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Not Found City or Region
        </List>
      </Collapse>
    );
  else
    content = (
      <Collapse in={show} timeout="auto" unmountOnExit>
        <List
          sx={{
            position: "fixed",
            height: "250px",
            width: "250px",
            color: "#000",
            backgroundColor: "#F7F6F9",
            borderRadius: "0px 0px 15px 15px",
            overflowY: "scroll",
          }}
        >
          {cities &&
            cities.map((city) => (
              <ListItem
                sx={{
                  ":hover": {
                    backgroundColor: "#1976D2",
                    color: "#fff",
                    transition: "all 300ms ease",
                  },
                }}
                key={city.id}
                onClick={() => setSelectedCity(city.url)}
              >
                <ListItemText>{city.name}</ListItemText>
              </ListItem>
            ))}
        </List>
      </Collapse>
    );

  return <>{content}</>;
};

export default SearchResults;
