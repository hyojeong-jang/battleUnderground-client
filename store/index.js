import reducers from '../reducers';
import { createStore, applyMiddleware } from 'redux';

const middleware = [];

if (process.env.NODE_ENV !== "production") {
  middleware.push();
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);

export default store
