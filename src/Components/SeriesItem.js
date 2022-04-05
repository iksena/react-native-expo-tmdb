import React from 'react';
import {
  Text, TouchableOpacity, Image, View,
} from 'react-native';
import dayjs from 'dayjs';

import styles from './SeriesItem.styles';

function SeriesItem(props) {
  const {
    id, handlePress, title, date, vote, imagePath,
  } = props;

  return (
    <TouchableOpacity onPress={() => handlePress(id)}>
      <View styles={styles.container}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w200${imagePath}`,
            width: 50,
            height: 75,
          }}
          resizeMode="cover"
        />
        <View>
          <Text style={styles.textTitle}>{title}</Text>
          <Text>{dayjs(date).format('MMM DD, YYYY')}</Text>
        </View>
        <Text>{vote}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SeriesItem;
