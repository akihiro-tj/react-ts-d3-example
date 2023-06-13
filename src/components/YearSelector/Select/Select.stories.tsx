import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Select } from './index';

type Story = StoryObj<typeof Select>;

type MockArgs = {
  className?: string;
};

const Mock: StoryFn<MockArgs> = ({ className }) => {
  return (
    <BrowserRouter>
      <Select className={className} />
    </BrowserRouter>
  );
};

export const Default: Story = {
  args: {
    className: 'mx-auto flex',
  },
};

const meta: Meta<typeof Mock> = {
  title: 'Select',
  component: Mock,
};
export default meta;
