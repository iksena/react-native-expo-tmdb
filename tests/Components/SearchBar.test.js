import { render } from '../test-utils';
import SearchBar from '../../src/Components/SearchBar';

jest.mock('@expo/vector-icons', () => ({
  MaterialIcons: 'MaterialIcons',
}));

describe('SearchBar component', () => {
  let props = {};

  beforeEach(() => {
    props = {
      value: '',
      setValue(value) {
        this.value = value;
      },
      onClose: jest.fn(),
      onSearch: jest.fn(),
    };
  });

  describe('#render', () => {
    it('should render component', () => {
      const { toJSON } = render(<SearchBar {...props} />);

      expect(toJSON()).toMatchSnapshot();
    });

    it('should render component with close button when user search', () => {
      props.value = 'search input';

      const { toJSON } = render(<SearchBar {...props} />);

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
