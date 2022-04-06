import { render } from '../test-utils';
import SeasonItem from '../../src/Components/SeasonItem';

describe('SeasonItem component', () => {
  const props = {
    title: 'Peacemaker',
    date: '2022-04-01',
    episodeCount: '10',
    imagePath: '/.url.jpg',
    overview: 'Peacemaker is not Pissmaker',
  };

  describe('#render', () => {
    it('should render component', () => {
      const { toJSON } = render(<SeasonItem {...props} />);

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
