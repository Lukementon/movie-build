import axios from 'axios';
import config from '../config';

const instance = axios.create({
  baseURL: config.MOVIE_DB_BASE_URL,
  params: {
    api_key: process.env.MOVIE_DB_API_KEY,
  },
});

export default instance;
