import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { useMemo } from 'react';

import { Card } from '../../Layout';
import { SVG } from '../SVG';

import { AxisLeft } from './index';

type Story = StoryObj<typeof Mock>;

type MockArgs = {
  data: number[];
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  size: {
    width: number;
    height: number;
  };
  label?: string;
};

const Mock: StoryFn<MockArgs> = ({ data, margin, size, label }) => {
  const scale = useMemo(() => {
    return scaleLinear()
      .domain(extent(data) as [number, number])
      .range([size.height - margin.bottom, margin.top])
      .nice();
  }, [data, size, margin]);

  return (
    <Card>
      <SVG {...size}>
        <AxisLeft
          x={margin.left}
          scale={scale}
          label={label}
          labelY={margin.top - 12}
        />
      </SVG>
    </Card>
  );
};

export const Default: Story = {
  args: {
    data: [20, 40, 130, 55, 70],
    margin: { top: 50, right: 45, bottom: 70, left: 60 },
    size: { width: 600, height: 450 },
  },
};

export const ShowLabel: Story = {
  args: {
    data: [20, 40, 130, 55, 70],
    margin: { top: 50, right: 45, bottom: 70, left: 60 },
    size: { width: 600, height: 450 },
    label: 'hoge',
  },
};

const meta: Meta<typeof Mock> = {
  title: 'AxisLeft',
  component: Mock,
};
export default meta;
