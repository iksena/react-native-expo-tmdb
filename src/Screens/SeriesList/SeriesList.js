import { VStack, Text, HStack } from 'native-base';
import { FlatList } from 'react-native';

import SeriesItem from '../../Components/SeriesItem';
import Empty from '../../Components/Empty';
import useSeriesListScreen from './useSeriesList';
import Loading from '../../Components/Loading';
import SearchBar from '../../Components/SearchBar';

export default function SeriesList(props) {
  const {
    data, loading, nextPage, refresh, page, handleItemPress, search, setSearch, handleSearch,
  } = useSeriesListScreen(props);

  return (
    <VStack p={2}>
      <HStack alignItems="center" justifyContent="space-around" mb={1}>
        <SearchBar value={search} setValue={setSearch} onClose={refresh} onSearch={handleSearch} />
        <Text color="muted.400" fontSize="xs">{`Page: ${page}`}</Text>
      </HStack>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <SeriesItem
            key={item.key}
            id={item.id}
            title={item.name}
            date={item.first_air_date}
            vote={item.vote_average}
            imagePath={item.poster_path}
            handlePress={handleItemPress(item)}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        refreshing={loading}
        onEndReached={nextPage}
        onRefresh={refresh}
        ListEmptyComponent={loading ? <Loading /> : <Empty />}
        ListFooterComponent={data?.length > 0 && loading && <Loading />}
        onEndReachedThreshold={0.25}
      />
    </VStack>
  );
}
