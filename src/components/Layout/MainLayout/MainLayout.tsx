import { FC } from 'react';

import useData from '../../../hooks/useData';
import { Card } from '../../Card';
import { Chart } from '../../Chart';
import { CheckBoxGroup } from '../../CheckBox';
import { Select, Slider } from '../../YearSelector';
import { BackGround } from '../BackGround';

export const MainLayout: FC = () => {
  useData();

  return (
    <BackGround>
      <CheckBoxGroup className="mx-3 mb-6 mt-10 max-w-screen-sm sm:mx-auto" />
      <Card className="mx-3 max-w-screen-md md:mx-auto">
        <Chart />
      </Card>
      <Slider className="mx-auto hidden max-w-screen-sm pr-6 sm:flex" />
      <Select className="mx-auto flex sm:hidden" />
    </BackGround>
  );
};
