import { FC } from 'react';

import './styles/index.scss';
import AppContextProvider from './providers/app/AppContextProvider';
import { AppRoutes } from './routes';

const App: FC = () => {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  );
};

export default App;
