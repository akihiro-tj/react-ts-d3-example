import { Action, Datum } from '../../types';

export type AppState = {
  data: Datum[];
  year: number;
  isAutoPlaying: boolean;
};

export const initialAppState: AppState = {
  data: [],
  year: 2018,
  isAutoPlaying: false,
};

// Action types
const UPDATE_DATA = 'UPDATE_DATA';
const UPDATE_YEAR = 'UPDATE_YEAR';
const UPDATE_IS_AUTO_PLAYING = 'UPDATE_IS_AUTO_PLAYING';

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

export const updateIsAutoPlaying = (isAutoPlaying: boolean) => {
  return {
    type: UPDATE_IS_AUTO_PLAYING,
    payload: isAutoPlaying,
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

    case UPDATE_IS_AUTO_PLAYING: {
      return {
        ...state,
        isAutoPlaying: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
