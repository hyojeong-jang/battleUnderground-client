import * as types from '../constants/index'

export const socketConnect = (train) => ({
  type: types.SOCKET_CONNECT,
  train
});

export const socketDisconnected = () => ({
  type: types.SOCKET_DISCONNECTED
});

export const socketJoin = (train, nickname) => ({
  type: types.SOCKET_JOIN,
  train,
  nickname
});

export const dispatchParticipants = (participants) => ({
  type: types.DISPATCH_PARTICIPANTS,
  participants
});

export const dispatchReadyUsers = (room, nickname, train) => ({
  type: types.DISPATCH_READY_USERS,
  room,
  nickname,
  train
});

export const dispatchUserStatus = (participants) => ({
  type: types.DISPATCH_USER_STATUS,
  participants
});

export const dispatchRoom = (room) => ({
  type: types.DISPATCH_ROOM,
  room
});

export const dispatchUserInitialInfo = (initialInfo) => ({
  type: types.DISPATCH_USER_INITIAL_INFO,
  initialInfo
});

export const dispatchUserInfoOnGame = (userInfo) => ({
  type: types.DISPATCH_USER_INFO_ON_GAME,
  userInfo
});

export const dispatchMessage = (room, messageInfo) => ({
  type: types.DISPATCH_MESSAGE,
  room,
  messageInfo
});

export const dispatchChatList = (chatList) => ({
  type: types.DISPATCH_CHAT_LIST,
  chatList
});

export const updateGameInfo = (gameInfo) => ({
  type: types.UPDATE_GAME_INFO,
  gameInfo
});

export const updateGameStatus = (gameStatus) => ({
  type: types.UPDATE_GAME_STATUS,
  gameStatus
});

export const receiveGameStatus = (room) => ({
  type: types.RECEIVE_GAME_STATUS,
  room
});

export const dispatchGameResult = (room, result, user, id, gameScore) => ({
  type: types.DISPATCH_GAME_RESULT,
  room,
  result,
  user,
  id,
  gameScore
});

export const updateGameResult = (topRankList, result) => ({
  type: types.UPDATE_GAME_RESULT,
  topRankList,
  result
})

export const closeGameRoom = (room) => ({
  type: types.CLOSE_GAME_ROOM,
  room
});

export const socketOff = (event) => ({
  type: types.SOCKET_OFF,
  event
});
