import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { useMemo } from 'react';

import useChart from '../../../hooks/useChart';
import { Container } from '../../Container';
import { Card } from '../../Layout';
import { SVG } from '../SVG';

import { GridY } from './index';

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
};

const Mock: StoryFn<MockArgs> = ({ data, margin, size }) => {
  const scale = useMemo(() => {
    return scaleLinear()
      .domain(extent(data) as [number, number])
      .range([margin.left, size.width - margin.right])
      .nice();
  }, [data, size, margin]);

  return (
    <Card>
      <SVG {...size}>
        <GridY
          minY={margin.top}
          maxY={size.height - margin.bottom}
          scale={scale}
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

const meta: Meta<typeof Mock> = {
  title: 'GridY',
  component: Mock,
};
export default meta;
