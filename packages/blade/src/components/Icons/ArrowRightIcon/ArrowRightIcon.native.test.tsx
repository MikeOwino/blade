import ArrowRightIcon from '.';
import renderWithTheme from '~utils/testing/renderWithTheme.native';

describe('<ArrowRightIcon />', () => {
  it('should render ArrowRightIcon', () => {
    const renderTree = renderWithTheme(
      <ArrowRightIcon color="feedback.icon.neutral.intense" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
