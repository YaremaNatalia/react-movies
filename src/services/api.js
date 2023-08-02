import axios from 'axios';

const KEY = 'b77fdf4e8642f590f33f1ce34d9000b8';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/day`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const IMAGE_URL_W500 = 'https://image.tmdb.org/t/p/w500';


const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`${TREND_URL}?api_key=${KEY}`);

  return data;
};

const fetchSearchQuery = async query => {
  const { data } = await axios.get(
    `${SEARCH_URL}?api_key=${KEY}&query=${query}`
  );

  return data;
};

const fetchMovieDetails = async movie_id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movie_id}?api_key=${KEY}`
  );
  return data;
};

const fetchMovieCast = async movie_id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}`
  );
 
  return data;
};

const fetchMovieReviews = async movie_id => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}`
  );
  return data;
};

export {
  fetchTrendingMovies,
  fetchSearchQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
  IMAGE_URL_W500,
};
