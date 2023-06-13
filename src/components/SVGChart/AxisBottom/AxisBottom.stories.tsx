import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { useMemo } from 'react';

import useChart from '../../../hooks/useChart';
import { Card } from '../../Card';
import { Container } from '../../Container';
import { SVG } from '../SVG';

import { AxisBottom } from './index';

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
      .range([margin.left, size.width - margin.right])
      .nice();
  }, [data, size, margin]);

  return (
    <Card>
      <Container ref={ref}>
        <SVG {...size}>
          <AxisBottom
            y={size.height - margin.bottom}
            scale={scale}
            label={label}
            labelX={size.width - margin.right}
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
  title: 'AxisBottom',
  component: Mock,
};
export default meta;
