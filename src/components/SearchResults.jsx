import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities, selectSearchData } from "../context/searchSlice";
import { fetchWeather } from "../context/weatherSlice";

import {
  CircularProgress,
  Collapse,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

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
      <Grid sx={searchResultsStyles.container}>
        <CircularProgress disableShrink />
      </Grid>
    );
  else if (error) content = <p>{status}</p>;
  else if (!cities)
    content = (
      <Collapse in={show} timeout="auto" unmountOnExit>
        <List sx={searchResultsStyles.noneCitieslist}>
          Not Found City or Region
        </List>
      </Collapse>
    );
  else
    content = (
      <Collapse in={show} timeout="auto" unmountOnExit>
        <List sx={searchResultsStyles.citiesList}>
          {cities &&
            cities.map((city) => (
              <ListItem
                sx={searchResultsStyles.listItem}
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

const searchResultsStyles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    width: "250px",
    height: "250px",
    backgroundColor: "#F7F6F9",
  },
  citiesList: {
    position: "fixed",
    height: "250px",
    width: "250px",
    color: "#000",
    backgroundColor: "#F7F6F9",
    borderRadius: "0px 0px 15px 15px",
    overflowY: "scroll",
  },
  listItem: {
    ":hover": {
      backgroundColor: "#1976D2",
      color: "#fff",
      transition: "all 300ms ease",
    },
  },
  noneCitieslist: {
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
  },
};

export default SearchResults;
