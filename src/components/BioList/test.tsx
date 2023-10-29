import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { BioList, BioListProps } from '.';

const props: BioListProps = {
  title: 'string',
  list: [],
};

describe('<BioList />', () => {
  it('should render', () => {
    renderTheme(<BioList {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
