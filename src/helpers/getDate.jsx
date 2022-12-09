const getDate = (dateNow) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date(dateNow);
  let day = days[today.getDay()];
  var date = new Date("2012-01-18T16:03");
  return `${day} ,${today.getHours()}:${
    (today.getMinutes() < 10 ? "0" : "") + today.getMinutes()
  }`;
};
export default getDate;
