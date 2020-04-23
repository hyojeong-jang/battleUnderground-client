import * as types from '../constants/index';

const initialState = {
  latitude: '',
  longitude: ''
};

const location = (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_LOCATION:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude
      };
    default:
      return state;
  }
}

export default location