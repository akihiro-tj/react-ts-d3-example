import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Slider } from './index';

type Story = StoryObj<typeof Slider>;

type MockArgs = {
  className?: string;
};

const Mock: StoryFn<MockArgs> = ({ className }) => {
  return (
    <BrowserRouter>
      <Slider className={className} />
    </BrowserRouter>
  );
};

export const Default: Story = {
  args: {
    className: 'mx-auto max-w-screen-sm',
  },
};

const meta: Meta<typeof Mock> = {
  title: 'Slider',
  component: Mock,
};
export default meta;
