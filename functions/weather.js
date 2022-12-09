const axios = require("axios");

exports.handler = async function (event, context) {
  try {
    const { q } = event.queryStringParameters;
    const URL = `${process.env.WEATHER_APP_BASE_URL}/forecast.json?key=${process.env.WEATHER_APP_API_KEY}&q=${q}&days=7&aqi=no&alerts=no`;
    const response = await axios
      .get(URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Accept-Encoding": "identity",
        },
      })
      .then((res) => res.data);
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: 404,
      body: error.toString(),
    };
  }
};
