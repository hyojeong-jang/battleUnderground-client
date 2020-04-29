import * as types from '../constants/index';

const initialState = {
  connected: false,
  room: ''
};

const socket = (state = initialState, action) => {
  switch (action.type) {
    case types.SOCKET_CONNECT:
      return {
        ...state,
        connected: true,
      };
    case types.SOCKET_JOIN:
      return {
        ...state ,
        room: action.train
      }
    case types.SOCKET_DISCONNECTED:
      return {
        ...state,
        connected: false
      }
    default:
      return state;
  }
}

export default socket
