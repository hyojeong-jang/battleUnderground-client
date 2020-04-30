import * as types from '../constants/index';

const initialState = {
  room: null,
  participants: [],
};

const socket = (state = initialState, action) => {
  switch (action.type) {
    case types.DISPATCH_PARTICIPANTS:
      return {
        ...state,
        participants: action.participants
      }
    case types.DISPATCH_ROOM:
      return {
        ...state,
        room: action.room
      }
    case types.DISPATCH_USER_STATUS:
      console.log('in reducer')
      return{
        ...state,
        participants: action.participants
      }
    default:
      return state;
  }
}

export default socket
