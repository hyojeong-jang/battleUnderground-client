import * as types from '../constants/index';

const initialState = {
  station: '',
  train: ''
};

const subway = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECTED_STATION:
      return {
        ...state,
        station: action.station,
      };
    case types.SELECTED_TRAIN:
      return {
        ...state,
        train: action.train
      }
    default:
      return state;
  }
}

export default subway