import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu, MenuProps } from '.';

const props: MenuProps = {
  title: 'any',
};

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
