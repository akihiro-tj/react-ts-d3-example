import { Avatar, IconButton } from '@mui/material';
import clsx from 'clsx';
import { FC, MouseEventHandler } from 'react';

import style from './PlayButton.module.scss';

export const playButtonTypes = {
  play: 'play',
  pause: 'pause',
} as const;

type PlayButton = {
  className?: string;
  type: keyof typeof playButtonTypes;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const PlayButton: FC<PlayButton> = ({ className, type, onClick }) => {
  return (
    <IconButton className={clsx(className, style.playButton)} onClick={onClick}>
      <Avatar src={`img/${type}.svg`} />
    </IconButton>
  );
};

export default PlayButton;
