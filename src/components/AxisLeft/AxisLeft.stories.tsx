import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { useMemo } from 'react';

import useChart from '../../hooks/useChart';
import Container from '../Container/Container';
import SVGChart from '../SVGChart/SVGChart';

import AxisLeft from './AxisLeft';

type Story = StoryObj<typeof Mock>;

type MockArgs = {
  data: number[];
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  aspect: number;
  label?: string;
};

const Mock: StoryFn<MockArgs> = ({ data, margin, aspect, label }) => {
  const { ref, size } = useChart(margin, aspect);

  const scale = useMemo(() => {
    return scaleLinear()
      .domain(extent(data) as [number, number])
      .range([size.height - margin.bottom, margin.top])
      .nice();
  }, [data, size, margin]);

  return (
    <Container ref={ref}>
      <SVGChart {...size}>
        <AxisLeft
          x={margin.left}
          scale={scale}
          label={label}
          labelY={margin.top - 12}
        />
      </SVGChart>
    </Container>
  );
};

export const Default: Story = {
  args: {
    data: [20, 40, 130, 55, 70],
    margin: {
      top: 30,
      right: 60,
      bottom: 50,
      left: 50,
    },
    aspect: 3 / 4,
  },
};

export const ShowLabel: Story = {
  args: {
    data: [20, 40, 130, 55, 70],
    margin: {
      top: 30,
      right: 60,
      bottom: 50,
      left: 50,
    },
    aspect: 3 / 4,
    label: 'hoge',
  },
};

const meta: Meta<typeof Mock> = {
  title: 'AxisLeft',
  component: Mock,
};
export default meta;
