import * as types from '../constants/index';

const initialState = {
  connected: false,
  room: null,
};

const socket = (state = initialState, action) => {
  switch (action.type) {
    case types.SOCKET_CONNECT:
      return {
        ...state,
        connected: true,
      };
    // case types.SOCKET_JOIN:
    //   return {
    //     ...state ,
    //     trainRoom: action.train
    //   }
    case types.SOCKET_DISCONNECTED:
      return {
        ...state,
        connected: false
      }
    case types.DISPATCH_ROOM_ID:
      return {
        ...state,
        room: action.roomId
      }
    case types.REMOVE_ROOM_ID:
      return {
        ...state,
        room: null
      }
    default:
      return state;
  }
}

export default socket
