import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { useMemo } from 'react';

import useChartSize from '../../hooks/useChartSize';
import Container from '../Container/Container';
import SVGChart from '../SVGChart/SVGChart';

import AxisBottom from './AxisBottom';

type Story = StoryObj<typeof Mock>;

type MockArgs = {
  data: number[];
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
};

const Mock: StoryFn<MockArgs> = ({ data, margin }) => {
  const { chartParentRef, chartSize } = useChartSize();

  const scale = useMemo(() => {
    return scaleLinear()
      .domain(extent(data) as [number, number])
      .range([margin.left, chartSize.width - margin.right])
      .nice();
  }, [data, chartSize, margin]);

  return (
    <Container ref={chartParentRef}>
      <SVGChart {...chartSize}>
        <AxisBottom y={chartSize.height - margin.bottom} scale={scale} />
      </SVGChart>
    </Container>
  );
};

export const Default: Story = {
  args: {
    data: [20, 40, 130, 55, 70],
    margin: {
      top: 20,
      right: 60,
      bottom: 50,
      left: 50,
    },
  },
};

const meta: Meta<typeof Mock> = {
  title: 'AxisBottom',
  component: Mock,
};
export default meta;
