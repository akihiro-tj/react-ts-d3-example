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
        <CheckBoxGroup className="mx-3 mb-6 max-w-screen-sm sm:mx-auto" />
        <Routes>
          <Route path="/chart" element={<Chart />} />
          {/* <Route path="/country/:country" element={<Drawer />} /> TODO(#4) */}
          <Route path="/" element={<Navigate to="/chart" />} />
        </Routes>
        <Slider className="mx-auto hidden max-w-screen-sm pr-6 sm:flex" />
        <Select className="mx-auto flex sm:hidden" />
      </div>
    </HashRouter>
  );
};

export default App;
