import {
  CircularProgress,
  Collapse,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCitySearch } from "../context/searchSlice";
import { useGetCityBySearchQuery } from "../context/weatherApi";

const SearchResults = ({ input, show }) => {
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState();
  const {
    data: searchResult,
    error,
    isError,
    isLoading,
  } = useGetCityBySearchQuery(input);

  useEffect(() => {
    if (selectedCity)
      dispatch(setCitySearch(selectedCity.split(" ").join("_")));
  }, [dispatch, selectedCity]);

  let content;

  if (isLoading)
    content = (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "250px",
          height: "250px",
          backgroundColor: "#F7F6F9",
        }}
      >
        <CircularProgress disableShrink />
      </div>
    );
  else if (isError) content = <p>{error.toString()}</p>;
  else if (searchResult)
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
          {searchResult &&
            searchResult.map((city) => (
              <ListItem
                sx={{
                  ":hover": {
                    backgroundColor: "#1976D2",
                    color: "#fff",
                    transition: "all 300ms ease",
                  },
                }}
                key={city.id}
                onClick={() => setSelectedCity(city.name)}
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
