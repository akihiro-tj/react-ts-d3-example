import { Action } from '../../types';

export type AppState = {
  count: number;
};

export const initialAppState: AppState = {
  count: 0,
};

// Action types
const UPDATE_COUNT = 'UPDATE_COUNT';

// Actions
export const updateCount = (count: number) => {
  return {
    type: UPDATE_COUNT,
    payload: count,
  };
};

// Reducer
export const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case UPDATE_COUNT: {
      return {
        ...state,
        count: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
