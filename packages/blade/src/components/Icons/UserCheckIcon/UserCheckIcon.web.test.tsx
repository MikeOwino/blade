import UserCheckIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<UserCheckIcon />', () => {
  it('should render UserCheckIcon', () => {
    const { container } = renderWithTheme(
      <UserCheckIcon color="feedback.icon.neutral.intense" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
