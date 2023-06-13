import { Meta, StoryObj } from '@storybook/react';

import { Legend } from './index';

type Story = StoryObj<typeof Legend>;

export const Default: Story = {
  args: {
    heading: 'hoge',
    items: [
      {
        label: '10億',
        radius: 33.6719 / 2,
      },
      {
        label: '5億',
        radius: 23.9771 / 2,
      },
      {
        label: '1億',
        radius: 11.304 / 2,
      },
      {
        label: '1000万',
        radius: 5.21325 / 2,
      },
    ],
  },
};

const meta: Meta<typeof Legend> = {
  title: 'Legend',
  component: Legend,
};
export default meta;
