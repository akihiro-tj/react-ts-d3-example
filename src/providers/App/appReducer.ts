import { Action } from '../../types';

export type AppState = {
  year: number;
};

export const initialAppState: AppState = {
  year: 2018,
};

// Action types
const UPDATE_YEAR = 'UPDATE_YEAR';

// Actions
export const updateYear = (year: number) => {
  return {
    type: UPDATE_YEAR,
    payload: year,
  };
};

// Reducer
export const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case UPDATE_YEAR: {
      return {
        ...state,
        year: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
