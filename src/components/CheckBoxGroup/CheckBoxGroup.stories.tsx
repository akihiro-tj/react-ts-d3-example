import { Meta, StoryObj } from '@storybook/react';

import CheckBoxGroup from './CheckBoxGroup';

type Story = StoryObj<typeof CheckBoxGroup>;

export const Default: Story = {};

const meta: Meta<typeof CheckBoxGroup> = {
  title: 'CheckBoxGroup',
  component: CheckBoxGroup,
};
export default meta;
