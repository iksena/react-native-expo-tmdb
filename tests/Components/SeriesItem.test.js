import { render } from '../test-utils';
import SeriesItem from '../../src/Components/SeriesItem';

describe('SeriesItem component', () => {
  const props = {
    title: 'Peacemaker',
    date: '2022-04-01',
    imagePath: '/.url.jpg',
    id: 1,
    handlePress: jest.fn(),
    vote: 8,
  };

  describe('#render', () => {
    it('should render component', () => {
      const { toJSON } = render(<SeriesItem {...props} />);

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
