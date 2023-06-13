import { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider';

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    className: 'mx-auto max-w-screen-sm',
  },
};

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  component: Slider,
};
export default meta;
