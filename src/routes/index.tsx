import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Main } from '../components/Main';
import { maxYear } from '../config';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/:year" element={<Main />} />
      <Route path="/" element={<Navigate to={`/${maxYear}`} />} />
    </Routes>
  );
};
