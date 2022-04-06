import { render } from '../test-utils';
import Empty from '../../src/Components/Empty';

describe('Empty component', () => {
  describe('#render', () => {
    it('should render component', () => {
      const { toJSON } = render(<Empty />);

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
