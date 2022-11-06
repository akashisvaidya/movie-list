import axios from "axios";

export const fetchData = (str) => {
  //   const apiEp = "http://www.omdbapi.com/?apikey=5e445267&t=" + str;
  const apiEp = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${str}`;
  //   console.log(str);
  const response = axios(apiEp);
  return response;
};
