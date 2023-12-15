import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = 'fde4dd89a2c817f4c4efb19732e7d4a1';

export const fetchMoviesTrend = async () => {
  const { data } = await axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
  console.log(data);
  return data;
};
