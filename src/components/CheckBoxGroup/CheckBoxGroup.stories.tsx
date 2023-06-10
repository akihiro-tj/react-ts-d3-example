import { Meta, StoryObj } from '@storybook/react';

import CheckBoxGroup from './CheckBoxGroup';

type Story = StoryObj<typeof CheckBoxGroup>;

export const Default: Story = {
  args: {
    className: 'mx-3 mb-6 max-w-screen-sm sm:mx-auto',
  },
};

const meta: Meta<typeof CheckBoxGroup> = {
  title: 'CheckBoxGroup',
  component: CheckBoxGroup,
};
export default meta;
