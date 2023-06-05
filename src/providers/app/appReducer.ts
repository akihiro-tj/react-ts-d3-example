import { Action, Datum } from '../../types';

export type AppState = {
  data: Datum[];
  year: number;
};

export const initialAppState: AppState = {
  data: [],
  year: 2018,
};

// Action types
const UPDATE_DATA = 'UPDATE_DATA';
const UPDATE_YEAR = 'UPDATE_YEAR';

// Actions
export const updateData = (data: Datum[]) => {
  return {
    type: UPDATE_DATA,
    payload: data,
  };
};

export const updateYear = (year: number) => {
  return {
    type: UPDATE_YEAR,
    payload: year,
  };
};

// Reducer
export const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case UPDATE_DATA: {
      return {
        ...state,
        data: action.payload,
      };
    }

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
