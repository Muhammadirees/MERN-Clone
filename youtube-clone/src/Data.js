export const API_KEY = "Enter the key from youtube data api";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.trunc(value / 1000000) + "M";
  } else if (value >= 1000) return Math.trunc(value / 1000) + "K";
  else return value;
};
