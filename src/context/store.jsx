import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import { weatherApi } from "./weatherApi";

export const store = configureStore({
  reducer: {
    weather: searchReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

export default store;
