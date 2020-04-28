import * as socketActions from '../actions/socket';
import * as types from '../constants/index'
import getEnvVars from '../environment';
import io from 'socket.io-client';

const { HOST_URL } = getEnvVars();

const socketMiddleware = () => {
  let socket = null;

  const onConnected = store => () => {
    console.log('socket connected');
    store.dispatch(socketActions.socketConnected());
  };

  const onDisconnect = store => () => {
    store.dispatch(socketActions.socketDisconnected());
  };

  const onJoin = store => () => {
    store.dispatch(socketActions.socketJoin())
  }

  return store => next => action => {
    switch (action.type) {
      case types.SOCKET_CONNECT:
        if (socket !== null) {
          socket.close();
        }

        socket = io(HOST_URL);
        socket.onclose = onDisconnect(store);
        socket.onopen = onConnected(store);
        socket.onjoin = onJoin(store);

        socket.onopen(store)
        break;
      case types.SOCKET_JOIN:
        console.log(action, 'in socketjoibn logging action')
        socket.onjoin(store)
        socket.emit('joinRoom')
        break;
      case types.SOCKET_DISCONNECTED:
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        console.log('websocket closed');
        break;
      default:
        console.log('the next action:', action);
        return next(action);
    }
  };
};

export default socketMiddleware();