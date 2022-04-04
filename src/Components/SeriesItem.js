import React from 'react';
import {
  Text, TouchableOpacity, Image,
} from 'react-native';

function SeriesItem(props) {
  const {
    id, handlePress, name, first_air_date: date, vote_average: vote, poster_path: imagePath,
  } = props;

  return (
    <TouchableOpacity onPress={() => handlePress(id)}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w200/${imagePath}` }} />
      <Text>{name}</Text>
      <Text>{date}</Text>
      <Text>{vote}</Text>
    </TouchableOpacity>
  );
}

export default SeriesItem;
