import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'modules/root/components/root';

import { createStore } from 'redux'
import { rootReducer } from './modules/root/root-reducer'
import { Provider } from 'react-redux';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : v => v)


ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)

