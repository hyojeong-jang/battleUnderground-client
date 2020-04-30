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

