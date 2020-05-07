import * as socketActions from '../actions/socket';
import * as actions from '../actions/index';
import * as types from '../constants/index'
import getEnvVars from '../environment';
import io from 'socket.io-client';

const { HOST_URL } = getEnvVars();

const socketMiddleware = () => {
  let socket = null;

  return store => next => action => {
    switch (action.type) {
      case types.SOCKET_CONNECT:
        if (socket !== null) {
          socket.close();
        }

        socket = io(HOST_URL);
        socket.emit('connected', action.train);
        socket.on('connected', (train) => {
          store.dispatch(socketActions.dispatchTrain(train));
        });

        break;
      case types.SOCKET_JOIN:
        const joinInfo = {
          train: action.train,
          nickname: action.nickname,
        };

        socket.emit('joinRoom', joinInfo);
        socket.on('joined', (participants, roomId) => {
          store.dispatch(socketActions.dispatchParticipants(participants));
          store.dispatch(socketActions.dispatchRoom(roomId));
        });

        break;
      case types.DISPATCH_READY_USERS:
        const userInfo = {
          train: action.train,
          nickname: action.nickname
        };

        socket.emit('onReady', userInfo, action.room);
        socket.on('readyStatus', (userStatus) => {
          store.dispatch(socketActions.dispatchUserStatus(userStatus));
        });

        break;
      case types.DISPATCH_USER_INITIAL_INFO:
        socket.emit('initialInfo', action.initialInfo)

        break;
      case types.RECEIVE_GAME_STATUS:
        socket.on('gameStatus', (gameStatus) => {
          store.dispatch(socketActions.updateGameStatus(gameStatus));
        });

        socket.on('updatedGameResult', (topRankList, result) => {
          store.dispatch(socketActions.updateGameResult(topRankList, result));
        });

        break;
      case types.DISPATCH_MESSAGE:
        socket.emit('message', action.room, action.messageInfo);
        socket.on('messageList', (chat) => {
          store.dispatch(socketActions.dispatchChatList(chat));
        })

        break;
      case types.UPDATE_GAME_INFO:
        socket.emit('updateGameInfo', action.gameInfo);
        socket.on('gameStatus', (gameStatus) => {
          store.dispatch(socketActions.updateGameStatus(gameStatus));
        });

        break;
      case types.DISPATCH_GAME_RESULT:
        const result = {
          room: action.room,
          result: action.result,
          user: action.user,
          id: action.id,
          gameScore: action.gameScore + 1
        };

        socket.emit('gameResult', result);
        socket.on('updatedGameResult', (topRankList, result) => {
          store.dispatch(socketActions.updateGameResult(topRankList, result));
        });

        break;
      case types.SOCKET_OFF:
        if (socket !== null) {
          socket.off(action.event);
        }

        break;
      case types.CLOSE_GAME_ROOM:
        socket.emit('closeGameRoom', action.room);
        store.dispatch(actions.clearGameStatus());

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
