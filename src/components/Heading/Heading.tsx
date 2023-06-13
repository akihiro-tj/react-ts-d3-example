import { FC } from 'react';

import { Prose } from '../Prose';

export const Heading: FC = () => {
  return (
    <Prose>
      <h1 className="mb-8 block text-center text-2xl">
        1人あたりGDPと平均寿命
      </h1>
    </Prose>
  );
};
