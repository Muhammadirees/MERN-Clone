export const API_KEY = "AIzaSyB9pug3nJAymuHzKWs98XeR5RndfE6DeXQ";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.trunc(value / 1000000) + "M";
  } else if (value >= 1000) return Math.trunc(value / 1000) + "K";
  else return value;
};
