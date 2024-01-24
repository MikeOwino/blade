import BatteryIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<BatteryIcon />', () => {
  it('should render BatteryIcon', () => {
    const { container } = renderWithTheme(
      <BatteryIcon color="feedback.icon.neutral.intense" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
