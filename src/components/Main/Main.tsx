import { FC } from 'react';

import useData from '../../hooks/useData';
import Chart from '../Chart/Chart';
import CheckBoxGroup from '../CheckBoxGroup/CheckBoxGroup';
import Select from '../Select/Select';
import Slider from '../Slider/Slider';

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
