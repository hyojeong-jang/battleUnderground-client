import * as socketActions from '../actions/socket';
import * as types from '../constants/index'
import getEnvVars from '../environment';
import io from 'socket.io-client';

const { HOST_URL } = getEnvVars();

const socketMiddleware = () => {
  let socket = null;
  console.log('in middleware');

  const onConnected = store => () => {
    console.log('on connected');
    store.dispatch(socketActions.socketConnected());
  };

  const onDisconnect = store => () => {
    store.dispatch(socketActions.socketDisconnected());
  };

  const onJoin = store => () => {
    store.dispatch(socketActions.socketJoin())
  };

  return store => next => action => {
    switch (action.type) {
      case types.SOCKET_CONNECT:
        console.log('socket connected')
        if (socket !== null) {
          socket.close();
        }
        socket = io(HOST_URL);

        // socket.emit('connect');

        // socket.onclose = onDisconnect(store);
        // socket.onopen = onConnected(store);
        // socket.onjoin = onJoin(store);
        break;
      case types.SOCKET_JOIN:
        const joinInfo = {
          train: action.train,
          nickname: action.nickname
        };

        socket.emit('joinRoom', joinInfo);
        break;
      case types.SOCKET_DISCONNECTED:
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        console.log('socket closed');
        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();