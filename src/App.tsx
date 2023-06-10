import { FC } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import './styles/index.scss';
import Chart from './components/Chart/Chart';
import CheckBoxGroup from './components/CheckBoxGroup/CheckBoxGroup';
import Select from './components/Select/Select';
import Slider from './components/Slider/Slider';
import useData from './hooks/useData';

const App: FC = () => {
  useData();

  return (
    <HashRouter>
      <div className="min-h-screen overflow-hidden bg-gray-50 pt-10">
        <CheckBoxGroup className="mx-3 mb-6 max-w-screen-sm md:mx-auto" />
        <Routes>
          <Route path="/chart" element={<Chart />} />
          <Route path="/" element={<Navigate to="/chart" />} />
        </Routes>
        <Slider className="mx-auto hidden max-w-screen-sm items-center justify-between gap-4 py-4 pr-6 sm:flex" />
        <Select className="mx-auto flex w-48 items-center justify-between gap-2 py-4 sm:hidden" />
      </div>
    </HashRouter>
  );
};

export default App;
