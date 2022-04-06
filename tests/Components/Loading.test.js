import { render } from '../test-utils';
import Loading from '../../src/Components/Loading';

describe('Loading component', () => {
  describe('#render', () => {
    it('should render component', () => {
      const { toJSON } = render(<Loading />);

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
