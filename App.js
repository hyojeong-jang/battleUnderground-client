import React from 'react';
import { Provider } from 'react-redux';
import Root from './containers/root';
import store from './store/index';

export default function App () {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

