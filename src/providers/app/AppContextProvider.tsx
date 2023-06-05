import { createContext, Dispatch, FC, ReactNode, useReducer } from 'react';

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
        {children}
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  );
};

export default AppContextProvider;
