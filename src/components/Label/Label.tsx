import { FC } from 'react';

type Label = {
  className?: string;
  x: number;
  y: number;
  text: string;
  size?: number;
  color?: string;
  opacity?: number;
};

const Label: FC<Label> = ({
  className,
  x,
  y,
  text,
  size = 14,
  color = '#888',
  opacity = 1,
}) => {
  return (
    <g className={className}>
      <text
        x={x}
        y={y}
        fontSize={size}
        fontWeight="700"
        fill="#fff"
        fillOpacity={opacity}
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.25em"
        strokeOpacity={opacity}
      >
        {text}
      </text>
      <text
        x={x}
        y={y}
        fontSize={size}
        fontWeight="700"
        fill={color}
        fillOpacity={opacity}
      >
        {text}
      </text>
    </g>
  );
};

export default Label;
