import reducer from '../reducers';
import { createStore } from 'redux';

// const middleware = [];

// if (process.env.NODE_ENV !== "production") {
//   middleware.push();
// }

const store = createStore(
  reducer,
  // applyMiddleware(...middleware)
);

export default store
