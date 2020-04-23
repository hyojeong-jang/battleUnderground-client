import * as types from '../constants/index';

const initialState = {
  number: 1,
};

const test = (state = initialState, action) => {
  switch (action.type) {
    case types.TEST:
      return { ...state, number: action.number };
    default:
      return state;
  }
}

export default test