import { useEffect, useState } from 'react';

import tmdbRequest from '../../Services/TMDB';

const fetchTvPopularList = async (page, {
  setData, setPage, setLoading, setError,
}) => {
  try {
    setLoading(true);
    const { data } = await tmdbRequest.get(`/tv/popular?page=${page}`);
    setData((prevData) => [...prevData, ...data.results]);
    setPage(data?.page);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

const useSeriesListScreen = () => {
  const [loading, setLoading] = useState(false);
  const [shouldFetch, setFetch] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
    setFetch(true);
  };
  const refresh = () => {
    setPage(1);
    setFetch(true);
  };
  const methods = {
    setData, setLoading, setError, setPage, nextPage, refresh,
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchTvPopularList(page, methods);
      setFetch(false);
    }
  }, [shouldFetch, page]);

  return {
    data,
    loading,
    error,
    page,
    ...methods,
  };
};

export default useSeriesListScreen;
