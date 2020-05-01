import * as types from '../constants/index';

const initialState = {
  room: null,
  participants: [],
  chatList: []
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
      return {
        ...state,
        participants: action.participants
      }
    case types.DISPATCH_CHAT_LIST:
      return {
        ...state,
        chatList: action.chatList
      }
    default:
      return state;
  }
}

export default socket
