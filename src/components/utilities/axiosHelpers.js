import axios from "axios";

export const fetchData = (str) => {
  //   const apiEp = "http://www.omdbapi.com/?apikey=5e445267&t=" + str;
  const apiEp = `http://www.omdbapi.com/?apikey=5e445267&t=${str}`;
  //   console.log(str);
  const response = axios(apiEp);
  return response;
};