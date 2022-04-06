import Constants from 'expo-constants';

export default {
  TMDB_BASE_URL: process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3',
  TMDB_TOKEN: process.env.TMDB_TOKEN || '',
  ...Constants.manifest.extra,
};
