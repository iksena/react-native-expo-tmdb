import React from 'react';
import {
  Text, TouchableOpacity, Image, View,
} from 'react-native';
import dayjs from 'dayjs';

import styles from './SeriesItem.styles';

function SeriesItem(props) {
  const {
    id, handlePress, name, first_air_date: date, vote_average: vote, poster_path: imagePath,
  } = props;

  return (
    <TouchableOpacity onPress={() => handlePress(id)}>
      <View styles={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/w200${imagePath}`,
            width: 50,
            height: 75,
          }}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text style={styles.textTitle}>{name}</Text>
          <Text>{dayjs(date).format('MMM DD, YYYY')}</Text>
        </View>
        <View style={styles.votes}>
          <Text>{vote}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default SeriesItem;
