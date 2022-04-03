import React from 'react';
import {
  Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
  },
  rating: {
    paddingVertical: 5,
  },
});

function SeriesItem(props) {
  const {
    id, handlePress, name, first_air_date: date, vote_average: vote,
  } = props;

  return (
    <TouchableOpacity onPress={() => handlePress(id)}>
      <View style={styles.view}>
        <Text>{name}</Text>
        <Text>{date}</Text>
        <Text>{vote}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default SeriesItem;
