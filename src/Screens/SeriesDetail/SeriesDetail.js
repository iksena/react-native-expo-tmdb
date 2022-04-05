import {
  View, Text,
} from 'react-native';
import { VStack } from 'native-base';

import styles from './SeriesDetail.styles';
import useSeriesDetailScreen from './useSeriesDetail';

export default function SeriesList(props) {
  const { data, loading } = useSeriesDetailScreen(props);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify({ data, loading }, null, 2)}</Text>
    </View>
  );
}
