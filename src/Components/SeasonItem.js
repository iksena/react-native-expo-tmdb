import React from 'react';
import {
  Box, Heading, HStack, Image, Text, VStack,
} from 'native-base';
import dayjs from 'dayjs';

import defaultImage from '../../assets/placeholder.jpg';

function SeasonItem(props) {
  const {
    title, date, episodeCount, imagePath, overview,
  } = props;

  return (
    <Box my={2}>
      <HStack>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w200${imagePath}`,
            width: 70,
            height: 100,
          }}
          resizeMode="cover"
          defaultSource={defaultImage}
          fallbackSource={defaultImage}
          alt="poster"
        />
        <VStack marginLeft={2} flex={1}>
          <Heading size="sm">{title}</Heading>
          <Text fontSize="sm">{`${dayjs(date).get('years')} | ${Number(episodeCount)} Episodes`}</Text>
          <Text fontSize="xs">{overview}</Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default SeasonItem;
