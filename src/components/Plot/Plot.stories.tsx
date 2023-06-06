import { Meta, StoryFn, StoryObj } from '@storybook/react';

import useChart from '../../hooks/useChart';
import Container from '../Container/Container';
import Label from '../Label/Label';
import SVGChart from '../SVGChart/SVGChart';

import Plot from './Plot';

type Story = StoryObj<typeof Mock>;

type MockArgs = {
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  aspect: number;
  x: number;
  y: number;
  radius: number;
  color?: string;
  label?: string;
  fontSize?: number;
};

const Mock: StoryFn<MockArgs> = ({
  margin,
  aspect,
  x,
  y,
  radius,
  color,
  label,
  fontSize,
}) => {
  const { ref, size } = useChart(margin, aspect);

  return (
    <Container ref={ref}>
      <SVGChart {...size}>
        <Plot x={x} y={y} radius={radius} color={color} />
        {label && (
          <Label
            x={x}
            y={y - radius}
            text={label}
            size={fontSize}
            color={color}
          />
        )}
      </SVGChart>
    </Container>
  );
};

export const Default: Story = {
  args: {
    margin: {
      top: 20,
      right: 60,
      bottom: 50,
      left: 50,
    },
    aspect: 3 / 4,
    x: 50,
    y: 50,
    radius: 20,
    color: '#1f77b4',
  },
};

export const ShowLabel: Story = {
  args: {
    margin: {
      top: 20,
      right: 60,
      bottom: 50,
      left: 50,
    },
    aspect: 3 / 4,
    x: 50,
    y: 50,
    radius: 20,
    color: '#1f77b4',
    label: 'hoge',
    fontSize: 18,
  },
};

const meta: Meta<typeof Mock> = {
  title: 'Plot',
  component: Mock,
};
export default meta;
