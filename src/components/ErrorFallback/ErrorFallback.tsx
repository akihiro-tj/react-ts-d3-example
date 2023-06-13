import { Button } from '@mui/material';
import { FC } from 'react';

import useErrorFallback from '../../hooks/useErrorFallback';
import { BackGround } from '../Layout/BackGround';

export const ErrorFallback: FC = () => {
  const { onClick } = useErrorFallback();

  return (
    <BackGround className="py-10">
      <div className="mx-auto max-w-screen-sm">
        <p className="mb-5">エラーが発生しました。</p>
        <Button variant="outlined" onClick={onClick}>
          再読み込み
        </Button>
      </div>
    </BackGround>
  );
};
