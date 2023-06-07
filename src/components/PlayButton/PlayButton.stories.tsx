import { Meta, StoryObj } from '@storybook/react';

import PlayButton from './PlayButton';

type Story = StoryObj<typeof PlayButton>;

export const Play: Story = {
  args: {
    type: 'play',
  },
};

export const Pause: Story = {
  args: {
    type: 'pause',
  },
};

const meta: Meta<typeof PlayButton> = {
  title: 'PlayButton',
  component: PlayButton,
};
export default meta;
