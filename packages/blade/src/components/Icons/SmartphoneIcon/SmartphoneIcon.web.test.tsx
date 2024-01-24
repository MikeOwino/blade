import SmartphoneIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<SmartphoneIcon />', () => {
  it('should render SmartphoneIcon', () => {
    const { container } = renderWithTheme(
      <SmartphoneIcon color="feedback.icon.neutral.intense" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
