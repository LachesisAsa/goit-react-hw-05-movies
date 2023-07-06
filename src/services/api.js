import axios from 'axios';
const API_KEY = '959942d7ed3f5c96912a03c758c47388';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingFilms = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return results.map(({ title, id }) => ({ title, id }));
};

export const getMovieById = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const { title, overview, poster_path, vote_average, genres, release_date } =
    data;
  return { title, overview, poster_path, vote_average, genres, release_date };
};

export const getMovieByActors = async id => {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast.map(({ name, profile_path, character }) => ({
    name,
    profile_path,
    character,
  }));
};

export const getMovieByReviews = async id => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data.results.map(({ author, content }) => ({ author, content }));
};

export const getMovieBySearchWord = async searchWord => {
  const {
    data: { results },
  } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${searchWord}&page=1&include_adult=false`
  );
  return results.map(({ title, id }) => ({ title, id }));
};