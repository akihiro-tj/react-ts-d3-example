import { Slider as MUISlider } from '@mui/material';
import clsx from 'clsx';
import { FC } from 'react';

import useSlider from '../../hooks/useSlider';
import PlayButton from '../PlayButton/PlayButton';

import style from './Slider.module.scss';

type Slider = {
  className?: string;
};

const Slider: FC<Slider> = ({ className }) => {
  const { sliderProps, playButtonProps } = useSlider();

  return (
    <div className={clsx(className, style.slider)}>
      <PlayButton {...playButtonProps} />
      <MUISlider {...sliderProps} />
    </div>
  );
};

export default Slider;
