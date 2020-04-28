import reducer from '../reducers';
import { createStore, applyMiddleware } from 'redux';

import socketMiddleware from '../middlewares/socket';

const middleware = [socketMiddleware];
// if (process.env.NODE_ENV !== "production") {
//   middleware.push();
// }

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export default store
