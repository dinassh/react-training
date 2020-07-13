import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'modules/root/components/root';

import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './modules/root/root-reducer'
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'modules/root/root-saga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)

