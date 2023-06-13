import { Meta, StoryObj } from '@storybook/react';

import { CheckBoxLabel } from './index';

type Story = StoryObj<typeof CheckBoxLabel>;

export const Default: Story = {
  args: {
    label: 'hoge',
    color: '#4682b4',
  },
};

const meta: Meta<typeof CheckBoxLabel> = {
  title: 'CheckBoxLabel',
  component: CheckBoxLabel,
};
export default meta;
