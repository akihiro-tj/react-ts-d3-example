import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { PlayButton } from './index';

type Story = StoryObj<typeof PlayButton>;

type MockArgs = {
  className?: string;
};

const Mock: StoryFn<MockArgs> = ({ className }) => {
  return (
    <BrowserRouter>
      <PlayButton className={className} />
    </BrowserRouter>
  );
};

export const Default: Story = {};

const meta: Meta<typeof Mock> = {
  title: 'PlayButton',
  component: Mock,
};
export default meta;
