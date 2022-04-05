import {
  Text, ScrollView, RefreshControl,
} from 'react-native';
import {
  AspectRatio, Stack, Image, Heading,
} from 'native-base';

import defaultImage from '../../../assets/placeholder.jpg';
import useSeriesDetailScreen from './useSeriesDetail';
import SeasonItem from '../../Components/SeasonItem';

const SeasonList = ({ seasons }) => seasons.map(({
  id,
  name,
  overview,
  poster_path: imagePath,
  air_date: date,
  episode_count: episodeCount,
}) => (
  <SeasonItem
    key={id}
    title={name}
    overview={overview}
    imagePath={imagePath}
    date={date}
    episodeCount={episodeCount}
  />
));

export default function SeriesList(props) {
  const { data, loading, refresh } = useSeriesDetailScreen(props);

  return (
    <ScrollView refreshControl={(
      <RefreshControl
        refreshing={loading}
        onRefresh={refresh}
      />
    )}
    >
      <AspectRatio w="100%" ratio={16 / 9}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${data.backdrop_path ?? data.poster_path}`,
          }}
          defaultSource={defaultImage}
          fallbackSource={defaultImage}
          alt="backdrop"
        />
      </AspectRatio>
      <Stack p="4" space={2}>
        <Heading size="xl">{data.name}</Heading>
        <Text fontWeight="400">{data.overview}</Text>
        {data.seasons?.length > 0 && (
          <Stack space={1}>
            <Heading size="md">Seasons</Heading>
            <SeasonList seasons={data.seasons} />
          </Stack>
        )}
      </Stack>
    </ScrollView>
  );
}
