import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';

import mock from '../MenuLink/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: mock,
  parameter: {
    layout: 'fullscreen',
  },
} as Meta<MenuProps>;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div style={{ maxWidth: '60rem', margin: '5rem auto', padding: '3.2rem' }}>
      <Menu {...args} />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non
        consequatur est recusandae! Ut accusantium reprehenderit delectus porro
        sint vel exercitationem accusamus odio amet? Cum ab labore qui sit quae.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non
        consequatur est recusandae! Ut accusantium reprehenderit delectus porro
        sint vel exercitationem accusamus odio amet? Cum ab labore qui sit quae.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non
        consequatur est recusandae! Ut accusantium reprehenderit delectus porro
        sint vel exercitationem accusamus odio amet? Cum ab labore qui sit quae.
      </p>
    </div>
  );
};
