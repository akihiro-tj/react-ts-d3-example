import { Meta, StoryFn, StoryObj } from '@storybook/react';

import useChart from '../../../hooks/useChart';
import { Card } from '../../Card';
import { Container } from '../../Container';
import { Label } from '../Label';
import { SVG } from '../SVG';

import { Plot } from './index';

type Story = StoryObj<typeof Mock>;

type MockArgs = {
  x: number;
  y: number;
  radius: number;
  color?: string;
  label?: string;
  fontSize?: number;
};

const Mock: StoryFn<MockArgs> = ({ x, y, radius, color, label, fontSize }) => {
  const { ref, size } = useChart();

  return (
    <Card>
      <Container ref={ref}>
        <SVG {...size}>
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
        </SVG>
      </Container>
    </Card>
  );
};

export const Default: Story = {
  args: {
    x: 50,
    y: 50,
    radius: 20,
    color: '#1f77b4',
  },
};

export const ShowLabel: Story = {
  args: {
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
