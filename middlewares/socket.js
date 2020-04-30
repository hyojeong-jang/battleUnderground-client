import * as socketActions from '../actions/socket';
import * as types from '../constants/index'
import getEnvVars from '../environment';
import io from 'socket.io-client';

const { HOST_URL } = getEnvVars();

const socketMiddleware = () => {
  let socket = null;
  console.log('in middleware');


  // socket.on('connected', () => {
  //   store.dispatch(socketActions.socketConnected());
  //   console.log('on connected');
  // });

  // const onConnected = store => () => {

  // };

  // const onDisconnect = store => () => {
  //   store.dispatch(socketActions.socketDisconnected());
  // };

  return store => next => action => {
    switch (action.type) {
      case types.SOCKET_CONNECT:
        if (socket !== null) {
          socket.close();
        }

        socket = io(HOST_URL);
        socket.emit('connected', action.train);
        socket.on('roomCheck', (room) => {
          if (room) {
            const rooms = Object.keys(room)[0];
            socketActions.dispatchRoomId(rooms)
          }
        })
        break;
      case types.SOCKET_JOIN:
        const joinInfo = {
          train: action.train,
          nickname: action.nickname,
        };

        socket.emit('joinRoom', joinInfo);
        socket.on('joined', (status) => {
          if (status === 'full') {
            console.log('full');

            // store.dispatch(
            //   socketActions.removeRoomId(randomString.replace('full', ''))
            // );
          } else if (status === 'createRoom') {
            console.log('createRoom')
            // store.dispatch(
            //   socketActions.dispatchRoomId(randomString)
            // );
          }
        })
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