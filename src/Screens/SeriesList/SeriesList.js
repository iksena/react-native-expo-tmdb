import { VStack, Text } from 'native-base';
import { FlatList } from 'react-native';

import SeriesItem from '../../Components/SeriesItem';
import Empty from '../../Components/Empty';
import useSeriesListScreen from './useSeriesList';
import Loading from '../../Components/Loading';

export default function SeriesList(props) {
  const {
    data, loading, nextPage, refresh, page, handleItemPress,
  } = useSeriesListScreen(props);

  return (
    <VStack p={2}>
      <Text color="muted.400" alignSelf="flex-end">{`Page: ${page}`}</Text>
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
