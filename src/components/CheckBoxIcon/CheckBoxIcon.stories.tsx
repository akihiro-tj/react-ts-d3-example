import { Meta, StoryObj } from '@storybook/react';

import CheckBoxIcon from './CheckBoxIcon';

type Story = StoryObj<typeof CheckBoxIcon>;

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

const meta: Meta<typeof CheckBoxIcon> = {
  title: 'CheckBoxIcon',
  component: CheckBoxIcon,
};
export default meta;
