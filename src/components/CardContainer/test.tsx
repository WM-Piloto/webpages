import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { CardContainer, CardContainerProps } from '.';

const props: CardContainerProps = {
  title: 'any',
};

describe('<CardContainer />', () => {
  it('should render', () => {
    renderTheme(<CardContainer {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
