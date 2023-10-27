import { Meta, Story } from '@storybook/react/types-6-0';
import { CardContainer, CardContainerProps } from '.';

export default {
  title: 'CardContainer',
  component: CardContainer,
} as Meta<CardContainerProps>;

export const Template: Story<CardContainerProps> = (args) => {
  return (
    <div>
      <CardContainer {...args} />
    </div>
  );
};
