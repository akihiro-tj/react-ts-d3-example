import { Avatar, IconButton } from '@mui/material';
import { FC, MouseEventHandler } from 'react';

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
    <IconButton className={className} onClick={onClick}>
      <Avatar src={`/img/${type}.svg`} />
    </IconButton>
  );
};

export default PlayButton;
