import { useEffect, useState, useCallback } from 'react';

import useErrorToast from '../../Hooks/useErrorToast';
import tmdbRequest from '../../Services/TMDB';

const fetchTvPopularList = async (page, search, {
  setData, setPage, setLoading, setError,
}) => {
  try {
    setLoading(true);
    const url = search !== '' ? `/search/tv/?query=${search}&page=${page}` : `/tv/popular?page=${page}`;
    const { data } = await tmdbRequest.get(url);
    setData((prevData) => [...prevData, ...data.results]);
    setPage(data?.page);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

const useSeriesListScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [shouldFetch, setFetch] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const nextPage = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
    setFetch(true);
  });
  const refresh = useCallback(() => {
    setSearch('');
    setPage(1);
    setData([]);
    setFetch(true);
  });
  const handleItemPress = useCallback(({ id, name }) => () => {
    navigation.navigate('SeriesDetail', { id, name });
  });
  const handleSearch = useCallback((text) => {
    setSearch(text);
    setPage(1);
    setData([]);
    setFetch(true);
  });
  const methods = {
    setData,
    setLoading,
    setError,
    setPage,
    nextPage,
    refresh,
    handleItemPress,
    handleSearch,
    setSearch,
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchTvPopularList(page, search, methods);
      setFetch(false);
    }
  }, [shouldFetch, page, search]);
  useErrorToast(error);

  return {
    data,
    loading,
    error,
    page,
    search,
    ...methods,
  };
};

export default useSeriesListScreen;
