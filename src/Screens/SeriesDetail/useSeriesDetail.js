import { useEffect, useState } from 'react';

import tmdbRequest from '../../Services/TMDB';

const fetchTvDetail = async (id, {
  setData, setLoading, setError,
}) => {
  try {
    setLoading(true);
    const { data } = await tmdbRequest.get(`/tv/${id}`);
    setData(data);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

const useSeriesDetailScreen = ({ route }) => {
  const [loading, setLoading] = useState(false);
  const [shouldFetch, setFetch] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState({});
  const refresh = () => setFetch(true);
  const methods = {
    setData, setLoading, setError, refresh,
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchTvDetail(route.params.id, methods);
      setFetch(false);
    }
  }, [shouldFetch]);

  return {
    data,
    loading,
    error,
    ...methods,
  };
};

export default useSeriesDetailScreen;
