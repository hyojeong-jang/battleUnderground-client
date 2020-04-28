import * as types from '../constants/index'

export const socketConnect = () => ({
  type: types.SOCKET_CONNECT
});

export const socketConnected = () => ({
  type: types.SOCKET_CONNECTED
});

export const socketDisconnected = () => ({
  type: types.SOCKET_DISCONNECTED
});

export const socketJoin = (train, nickname) => ({
  type: types.SOCKET_JOIN,
  train,
  nickname
});
