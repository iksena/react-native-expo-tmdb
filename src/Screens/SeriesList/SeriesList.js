import {
  VStack, Text, Input, Icon, HStack,
} from 'native-base';
import { FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import SeriesItem from '../../Components/SeriesItem';
import Empty from '../../Components/Empty';
import useSeriesListScreen from './useSeriesList';
import Loading from '../../Components/Loading';

function Search({
  value, setValue, onClose, onSearch,
}) {
  return (
    <Input
      w="80%"
      value={value}
      onChangeText={setValue}
      InputRightElement={(
        <Icon
          as={(
            <MaterialIcons
              name={value !== '' ? 'close' : 'search'}
              onPress={value !== '' ? onClose : () => {}}
            />
          )}
          size={5}
          ml="2"
          color="muted.500"
        />
      )}
      placeholder="Search TV Shows"
      onSubmitEditing={({ nativeEvent: { text } }) => onSearch(text)}
      returnKeyType="search"
    />
  );
}

export default function SeriesList(props) {
  const {
    data, loading, nextPage, refresh, page, handleItemPress, search, setSearch, handleSearch,
  } = useSeriesListScreen(props);

  return (
    <VStack p={2}>
      <HStack alignItems="center" justifyContent="space-around" mb={1}>
        <Search value={search} setValue={setSearch} onClose={refresh} onSearch={handleSearch} />
        <Text color="muted.400" fontSize="xs">{`Page: ${page}`}</Text>
      </HStack>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <SeriesItem
            key={item.key}
            id={item.id}
            title={item.name}
            date={item.first_air_date}
            vote={item.vote_average}
            imagePath={item.poster_path}
            handlePress={handleItemPress(item)}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        refreshing={loading}
        onEndReached={nextPage}
        onRefresh={refresh}
        ListEmptyComponent={loading ? <Loading /> : <Empty />}
        ListFooterComponent={data?.length > 0 && loading && <Loading />}
        onEndReachedThreshold={0.25}
      />
    </VStack>
  );
}
