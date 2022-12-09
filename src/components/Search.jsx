import React, { useState } from "react";
import SearchResults from "./SearchResults";

import { MyLocation } from "@mui/icons-material";
import { FormControl, InputAdornment, TextField } from "@mui/material";

const Search = () => {
  const [input, setInput] = useState();
  const [isShow, setIsShow] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setInput(e.target.value.toLowerCase());
    }, 1500);
  };

  return (
    <div>
      <FormControl variant="standard">
        <TextField
          id="outlined-basic"
          label="Search City/Region"
          variant="outlined"
          type="text"
          onChange={(e) => handleInput(e)}
          onFocus={() => setIsShow(true)}
          onBlur={() =>
            setTimeout(() => {
              setIsShow(false);
            }, 100)
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MyLocation />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      <SearchResults input={input} show={isShow} />
    </div>
  );
};

export default Search;
