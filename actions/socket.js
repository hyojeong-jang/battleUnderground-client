import * as types from '../constants/index'

export const socketConnect = (train) => ({
  type: types.SOCKET_CONNECT,
  train
});

export const socketConnected = () => ({
  type: types.SOCKET_CONNECTED
});

export const socketDisconnected = () => ({
  type: types.SOCKET_DISCONNECTED
});

export const socketJoin = (train, nickname, room) => ({
  type: types.SOCKET_JOIN,
  train,
  nickname,
  room
});

export const dispatchRoomId = (roomId) => ({
  type: types.DISPATCH_ROOM_ID,
  roomId
})

export const removeRoomId = (roomId) => ({
  type: types.REMOVE_ROOM_ID,
  roomId
})
