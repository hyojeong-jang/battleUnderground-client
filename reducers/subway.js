import * as types from '../constants/index';

const initialState = {
  station: '',
};

const location = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECTED_STATION:
      return {
        ...state,
        station: action.station,
      };
    default:
      return state;
  }
}

export default location