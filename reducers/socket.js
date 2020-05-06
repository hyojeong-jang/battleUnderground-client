import * as types from '../constants/index';

const initialState = {
  room: null,
  participants: [],
  chatList: [],
  gameStatus: [],
  selectedBoxes: [],
  winner: [],
  gameScore: null,
  station: null,
  topRanking: []
};

const socket = (state = initialState, action) => {
  switch (action.type) {
    case types.DISPATCH_USER_DOCUMENT:
      return {
        ...state,
        gameScore: action.document.game_score
      }
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
    case types.UPDATE_GAME_STATUS:
      return {
        ...state,
        gameStatus: action.gameStatus,
        selectedBoxes: action.gameStatus.map(el => {
          return el.selectedBoxes
        })
      }
    case types.UPDATE_GAME_RESULT:
      return {
        ...state,
        winner: action.result.map(el => {
          return { isWinner: el.winner, nickname: el.name }
        }),
        gameStatus: action.result,
        topRanking: action.topRankList
      }
    case types.DISPATCH_EXIST_USER_DOCUMENT:
      return {
        ...state,
        participants: [],
        chatList: [],
        gameStatus: [],
        selectedBoxes: [],
        winner: [],
        gameScore: action.document.game_score,
        station: action.document.station
      }
    case types.CLEAR_GAME_STATUS:
      return {
        ...state,
        chatList: [],
        gameStatus: [],
        selectedBoxes: [],
        winner: []
      }
    default:
      return state;
  }
}

export default socket
