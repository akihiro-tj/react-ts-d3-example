import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { MainLayout } from '../components/MainLayout';
import { maxYear } from '../config';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/:year" element={<MainLayout />} />
      <Route path="/" element={<Navigate to={`/${maxYear}`} />} />
    </Routes>
  );
};
