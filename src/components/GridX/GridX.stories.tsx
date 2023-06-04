import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { extent } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { useMemo } from 'react';

import useChart from '../../hooks/useChart';
import Container from '../Container/Container';
import SVGChart from '../SVGChart/SVGChart';

import GridX from './GridX';

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
};

const Mock: StoryFn<MockArgs> = ({ data, margin, aspect }) => {
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
        <GridX
          minX={margin.left}
          maxX={size.width - margin.right}
          scale={scale}
        />
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
    aspect: 3 / 4,
  },
};

const meta: Meta<typeof Mock> = {
  title: 'GridX',
  component: Mock,
};
export default meta;
