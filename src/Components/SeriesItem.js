import React from 'react';
import {
  Box, HStack, Image, Text, VStack,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import dayjs from 'dayjs';

import defaultImage from '../../assets/placeholder.jpg';

function SeriesItem(props) {
  const {
    id, handlePress, title, date, vote, imagePath,
  } = props;
  const voteColor = Number(vote) < 6 ? 'danger.400' : 'tertiary.400';

  return (
    <TouchableOpacity onPress={() => handlePress(id)}>
      <Box bg="muted.50" my="1" p="2" rounded="md" maxWidth="100%" borderColor="coolGray.200">
        <HStack>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w200${imagePath}`,
              width: 50,
              height: 75,
            }}
            resizeMode="cover"
            defaultSource={defaultImage}
            fallbackSource={defaultImage}
            alt="poster"
          />
          <VStack marginLeft={2} flex={3}>
            <Text fontSize="xl" bold>{title}</Text>
            <Text fontSize="sm">{dayjs(date).format('MMM DD, YYYY')}</Text>
          </VStack>
          <Box rounded="lg" bg={voteColor} p={1} minWidth={10} alignItems="center" maxHeight={10}>
            <Text ellipsizeMode="tail" fontSize="lg" noOfLines={15} bold>{vote}</Text>
          </Box>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
}

export default SeriesItem;
