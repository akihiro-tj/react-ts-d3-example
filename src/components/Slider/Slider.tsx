import MUISlider from '@mui/material/Slider';
import clsx from 'clsx';
import { FC } from 'react';

import useSlider from '../../hooks/useSlider';
import PlayButton from '../PlayButton/PlayButton';

import style from './Slider.module.scss';

type Slider = {
  className?: string;
};

const Slider: FC<Slider> = ({ className }) => {
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

export default Slider;
