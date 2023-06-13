import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import IconButton from '@mui/material/IconButton';
import clsx from 'clsx';
import { FC } from 'react';

import useSlider from '../../hooks/useSlider';

import style from './PlayButton.module.scss';

type PlayButtonProps = {
  className?: string;
};

export const PlayButton: FC<PlayButtonProps> = ({ className }) => {
  const {
    playButtonProps: { isPlaying, onClick },
  } = useSlider();

  return (
    <IconButton
      className={clsx(className, 'h-12 w-12 !p-1', style.playButton)}
      onClick={onClick}
    >
      {isPlaying && <PauseRoundedIcon />}
      {!isPlaying && <PlayArrowRoundedIcon />}
    </IconButton>
  );
};
