import { continents } from '../../config';
import { Action, Continent, CheckBoxGroup, Datum } from '../../types';

export type AppState = {
  data: Datum[];
  isAutoPlaying: boolean;
  checkBoxGroup: CheckBoxGroup;
};

export const initialAppState: AppState = {
  data: [],
  isAutoPlaying: false,
  checkBoxGroup: continents.reduce((acc, cur) => {
    return {
      ...acc,
      [cur]: true,
    };
  }, {} as CheckBoxGroup),
};

// Action types
const UPDATE_DATA = 'UPDATE_DATA';
const UPDATE_IS_AUTO_PLAYING = 'UPDATE_IS_AUTO_PLAYING';
const UPDATE_CHECK_BOX_GROUP = 'UPDATE_CHECK_BOX_GROUP';

// Actions
export const updateData = (data: Datum[]) => {
  return {
    type: UPDATE_DATA,
    payload: data,
  };
};

export const updateIsAutoPlaying = (isAutoPlaying: boolean) => {
  return {
    type: UPDATE_IS_AUTO_PLAYING,
    payload: isAutoPlaying,
  };
};

export const updateCheckBoxGroup = (key: Continent, value: boolean) => {
  return {
    type: UPDATE_CHECK_BOX_GROUP,
    payload: { key, value },
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

    case UPDATE_IS_AUTO_PLAYING: {
      return {
        ...state,
        isAutoPlaying: action.payload,
      };
    }

    case UPDATE_CHECK_BOX_GROUP: {
      const checkBoxGroup = {
        ...state.checkBoxGroup,
        [action.payload.key]: action.payload.value,
      };
      return {
        ...state,
        checkBoxGroup,
      };
    }

    default: {
      return state;
    }
  }
};
