import { Icon, Input } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

function SearchBar({
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
              onPress={value !== '' ? onClose : onSearch}
            />
            )}
          size={5}
          ml="2"
          color="muted.500"
        />
        )}
      placeholder="Search TV Shows"
      onSubmitEditing={onSearch}
      returnKeyType="search"
    />
  );
}

export default SearchBar;
