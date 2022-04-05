import {
  Text,
} from 'react-native';
import { VStack } from 'native-base';

import useSeriesDetailScreen from './useSeriesDetail';

export default function SeriesList(props) {
  const { data, loading } = useSeriesDetailScreen(props);

  return (
    <VStack>
      <Text>{JSON.stringify({ data, loading }, null, 2)}</Text>
    </VStack>
  );
}
