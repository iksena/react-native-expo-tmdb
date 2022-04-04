import {
  View, FlatList, Text,
} from 'react-native';

import SeriesItem from '../../Components/SeriesItem';
import styles from './SeriesList.styles';
import useSeriesListScreen from './useSeriesList';

export default function SeriesList() {
  const {
    data, loading, nextPage, refresh, page,
  } = useSeriesListScreen();

  return (
    <View style={styles.container}>
      <Text>{`Page: ${page}`}</Text>
      <Text>kamskdmasd</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <SeriesItem key={item.key} {...item} />}
        keyExtractor={(item) => `${item.id}`}
        refreshing={loading}
        onEndReached={nextPage}
        onRefresh={refresh}
        ListEmptyComponent={<Text>Empty</Text>}
      />
    </View>
  );
}
