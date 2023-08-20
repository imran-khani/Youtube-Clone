import axios from "axios";

const youtubeApiKey = import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY;
const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": youtubeApiKey,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

const fetchDataFromApi = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export {fetchDataFromApi};
