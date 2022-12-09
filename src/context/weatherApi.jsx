import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:8888` }),
  endpoints: (builder) => ({
    getCityBySearch: builder.query({
      query: (input) => `/.netlify/functions/search?q=${input}`,
    }),
    getWeatherByCity: builder.query({
      query: (city) => `/.netlify/functions/weather?q=${city}`,
    }),
  }),
});

export const { useGetCityBySearchQuery, useGetWeatherByCityQuery } = weatherApi;
