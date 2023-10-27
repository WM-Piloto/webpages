import { Meta, Story } from '@storybook/react/types-6-0';
import { BioList, BioListProps } from '.';

import mock from './mock';

export default {
  title: 'BioList',
  component: BioList,
  args: mock,
} as Meta<BioListProps>;

export const Template: Story<BioListProps> = (args) => {
  return (
    <div>
      <BioList {...args} />
    </div>
  );
};
