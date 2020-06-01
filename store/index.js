import reducer from '../reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import socketMiddleware from '../middlewares/socket';

const middleware = [reduxThunk, socketMiddleware];

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware)
  )
);

export default store
