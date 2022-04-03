import axios from 'axios';

import config from '../Config';

const tmdbRequest = axios.create({
  baseURL: config.TMDB_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${config.TMDB_TOKEN}`,
  },
});

export default tmdbRequest;
