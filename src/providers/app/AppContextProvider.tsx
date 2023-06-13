import { createContext, Dispatch, FC, ReactNode, useReducer } from 'react';
import { HashRouter } from 'react-router-dom';

import { Action } from '../../types';

import { AppState, initialAppState, appReducer } from './appReducer';

type AppContextProvider = {
  children: ReactNode;
};

export const AppContext = createContext<AppState>(initialAppState);
export const AppUpdateContext = createContext<Dispatch<Action>>(() => {
  return;
});

const AppContextProvider: FC<AppContextProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={state}>
      <AppUpdateContext.Provider value={dispatch}>
        <HashRouter>{children}</HashRouter>
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
