import React from 'react';
import { Provider } from 'react-redux';

import store from './store/index';
import RootStack from './navigation/RootStack';

export default function App () {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}

