import { Meta, StoryObj } from '@storybook/react';

import { Card } from './index';

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <div className="h-96" />,
  },
};

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};
export default meta;
