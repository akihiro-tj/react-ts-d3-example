import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { useMemo } from 'react';

import useChart from '../../../hooks/useChart';
import { Card } from '../../Card';
import { Container } from '../../Container';
import { SVG } from '../SVG';

import { AxisLeft } from './index';

type Story = StoryObj<typeof Mock>;

type MockArgs = {
  data: number[];
  label?: string;
};

const Mock: StoryFn<MockArgs> = ({ data, label }) => {
  const { ref, size, margin } = useChart();

  const scale = useMemo(() => {
    return scaleLinear()
      .domain(extent(data) as [number, number])
      .range([size.height - margin.bottom, margin.top])
      .nice();
  }, [data, size, margin]);

  return (
    <Card>
      <Container ref={ref}>
        <SVG {...size}>
          <AxisLeft
            x={margin.left}
            scale={scale}
            label={label}
            labelY={margin.top - 12}
          />
        </SVG>
      </Container>
    </Card>
  );
};

export const Default: Story = {
  args: {
    data: [20, 40, 130, 55, 70],
  },
};

export const ShowLabel: Story = {
  args: {
    data: [20, 40, 130, 55, 70],
    label: 'hoge',
  },
};

const meta: Meta<typeof Mock> = {
  title: 'AxisLeft',
  component: Mock,
};
export default meta;