import { FC } from 'react';

type Label = {
  className?: string;
  x: number;
  y: number;
  text: string;
  size?: number;
  color?: string;
};

const Label: FC<Label> = ({
  className,
  x,
  y,
  text,
  size = 14,
  color = '#888',
}) => {
  return (
    <g className={className}>
      <text
        x={x}
        y={y}
        fontSize={size}
        fontWeight="700"
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.25em"
      >
        {text}
      </text>
      <text x={x} y={y} fontSize={size} fontWeight="700" fill={color}>
        {text}
      </text>
    </g>
  );
};

export default Label;
