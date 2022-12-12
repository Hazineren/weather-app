const getDate = (dateNow) => {
  const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
  const today = new Date(dateNow);
  let day = days[today.getDay()];  
  return `${day}`;
};
export default getDate;
