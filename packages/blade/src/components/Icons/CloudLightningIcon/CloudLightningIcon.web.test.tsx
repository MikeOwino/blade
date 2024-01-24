import CloudLightningIcon from './';
import renderWithTheme from '~utils/testing/renderWithTheme.web';

describe('<CloudLightningIcon />', () => {
  it('should render CloudLightningIcon', () => {
    const { container } = renderWithTheme(
      <CloudLightningIcon color="feedback.icon.neutral.intense" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
