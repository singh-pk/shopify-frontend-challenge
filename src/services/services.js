import axios from 'axios';

export const getMovieLists = (query, page) =>
  axios.get(
    `https://www.omdbapi.com/?apikey=c96ccb5f&type=movie&s=${query}&page=${page}`
  );
