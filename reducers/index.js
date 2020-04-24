import { combineReducers } from 'redux';
import location from './location';
import subway from './subway';

const reducer = combineReducers({
 location,
 subway
});

export default reducer