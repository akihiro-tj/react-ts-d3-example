import { FC } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import Chart from './components/Chart/Chart';
import './styles/index.scss';
import useData from './hooks/useData';

const App: FC = () => {
  useData();

  return (
    <HashRouter>
      <Routes>
        <Route path="/chart" element={<Chart />} />
        <Route path="/" element={<Navigate to="/chart" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
