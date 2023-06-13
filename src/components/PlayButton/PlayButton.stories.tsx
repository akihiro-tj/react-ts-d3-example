import { Meta, StoryObj } from '@storybook/react';

import { PlayButton } from './PlayButton';

type Story = StoryObj<typeof PlayButton>;

export const Default: Story = {};

const meta: Meta<typeof PlayButton> = {
  title: 'PlayButton',
  component: PlayButton,
};
export default meta;
