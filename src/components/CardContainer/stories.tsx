import { Meta, Story } from '@storybook/react/types-6-0';
import { CardContainer, CardContainerProps } from '.';

import mock from '../CardContainer/mock';

export default {
  title: 'CardContainer',
  component: CardContainer,
  args: mock,
} as Meta<CardContainerProps>;

export const Template: Story<CardContainerProps> = (args) => {
  return (
    <div>
      <CardContainer className={'portfolio'} cardList={...args}></CardContainer>
    </div>
  );
};
