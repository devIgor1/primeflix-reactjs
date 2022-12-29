import axios from "axios";

// URL_BASE = https://api.themoviedb.org/3/
//URL_API =  https://api.themoviedb.org/3/movie/now_playing?api_key=8f8839ff5d2dfc092309ad5bf9ebccaa

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
