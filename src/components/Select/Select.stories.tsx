import { Meta, StoryObj } from '@storybook/react';

import Select from './Select';

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    className: 'mx-auto flex',
  },
};

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
};
export default meta;
