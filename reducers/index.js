import { combineReducers } from 'redux';
import location from './location';
import subway from './subway';
import socket from './socket';
import user from './user';

const reducer = combineReducers({
 location,
 subway,
 user,
 socket
});

export default reducer