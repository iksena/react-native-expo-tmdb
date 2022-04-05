import { VStack, Text } from 'native-base';
import {
  FlatList,
} from 'react-native';

import SeriesItem from '../../Components/SeriesItem';
import styles from './SeriesList.styles';
import useSeriesListScreen from './useSeriesList';

export default function SeriesList() {
  const {
    data, loading, nextPage, refresh, page,
  } = useSeriesListScreen();

  return (
    <VStack justifyContent="space-between" p={2}>
      <Text>{`Page: ${page}`}</Text>
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
            handlePress={() => {}}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        refreshing={loading}
        onEndReached={nextPage}
        onRefresh={refresh}
        ListEmptyComponent={<Text>Empty</Text>}
        contentContainerStyle={styles.list}
      />
    </VStack>
  );
}
