import { combineReducers } from 'redux';
import location from './location';
import subway from './subway';
import user from './user';

const reducer = combineReducers({
 location,
 subway,
 user
});

export default reducer