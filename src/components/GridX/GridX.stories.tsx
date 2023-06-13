import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { useMemo } from 'react';

import useChart from '../../hooks/useChart';
import { Card } from '../Card/Card';
import { Container } from '../Container/Container';
import { SVGChart } from '../SVGChart/SVGChart';

import { GridX } from './GridX';

type Story = StoryObj<typeof Mock>;

type MockArgs = {
  data: number[];
};

const Mock: StoryFn<MockArgs> = ({ data }) => {
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
        <SVGChart {...size}>
          <GridX
            minX={margin.left}
            maxX={size.width - margin.right}
            scale={scale}
          />
        </SVGChart>
      </Container>
    </Card>
  );
};

export const Default: Story = {
  args: {
    data: [20, 40, 130, 55, 70],
  },
};

const meta: Meta<typeof Mock> = {
  title: 'GridX',
  component: Mock,
};
export default meta;
