import { Meta, Story } from '@storybook/react/types-6-0';
import { CardContainer, CardContainerProps } from '.';

import mock from './mock';
import mockDev from './mockDev';
import mockGames from './mockGames';
import mockArt from './mockArt';
import mockBooks from './mockBooks';

export default {
  title: 'CardContainer',
  component: CardContainer,
  args: mockArt,
} as Meta<CardContainerProps>;

export const Template: Story<CardContainerProps> = (args) => {
  return <CardContainer {...args} />;
};
