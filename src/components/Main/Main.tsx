import { FC } from 'react';

import useData from '../../hooks/useData';
import { Chart } from '../Chart';
import { CheckBoxGroup } from '../CheckBox';
import { Select, Slider } from '../YearSelector';

export const Main: FC = () => {
  useData();

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50 pt-10">
      <CheckBoxGroup className="mx-3 mb-6 max-w-screen-sm sm:mx-auto" />
      <Chart />
      <Slider className="mx-auto hidden max-w-screen-sm pr-6 sm:flex" />
      <Select className="mx-auto flex sm:hidden" />
    </div>
  );
};
