import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu, MenuProps } from '.';

import mock from '../MenuLink/mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should render button link', () => {
    renderTheme(<Menu {...props} links={undefined} />);

    const buttonLink = screen.getByRole('link', {
      name: 'Open or close menu',
    });
    const openMenuIcon = screen.getByLabelText('Open menu');

    expect(buttonLink).toBeInTheDocument();
    expect(openMenuIcon).toBeInTheDocument();

    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('should open/close menu on button press', () => {
    renderTheme(<Menu {...props} links={undefined} />);

    const buttonLink = screen.getByRole('link', {
      name: 'Open or close menu',
    });

    expect(buttonLink).toBeInTheDocument();
    fireEvent.click(buttonLink);

    expect(screen.queryByLabelText('Close menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Otavio miranda' }));
    expect(
      screen.getByRole('navigation').querySelectorAll('a:not([href="/"])'),
    ).toHaveLength(mock.links.length);

    fireEvent.click(buttonLink);

    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);
    expect(container).toMatchSnapshot();
  });
});
