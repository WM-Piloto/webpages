import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Card, CardProps } from '.';

const props: CardProps = {
  title: 'any',
};

describe('<Card />', () => {
  it('should render', () => {
    renderTheme(<Card {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
