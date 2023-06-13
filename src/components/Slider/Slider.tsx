import MUISlider from '@mui/material/Slider';
import clsx from 'clsx';
import { FC } from 'react';

import useSlider from '../../hooks/useSlider';
import { PlayButton } from '../PlayButton/PlayButton';

import style from './Slider.module.scss';

type SliderProps = {
  className?: string;
};

export const Slider: FC<SliderProps> = ({ className }) => {
  const { sliderProps } = useSlider();

  return (
    <div
      className={clsx(
        className,
        'flex items-center justify-between gap-3 py-4',
        style.slider,
      )}
    >
      <PlayButton />
      <MUISlider {...sliderProps} />
    </div>
  );
};
