import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchCity: "istanbul",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCitySearch: (state, action) => {
      state.searchCity = action.payload;
    },
  },
});

export const { setCitySearch, setWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
