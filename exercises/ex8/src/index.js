import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'modules/root/components/root';

import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './modules/root/root-reducer'
import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'modules/root/root-saga'

import { router5Middleware } from 'redux-router5'
import { routes } from './router/routes'
import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

import { routeNodeSelector } from 'redux-router5'

import { getUsersMWare } from 'router/routes-middleware'


const router = createRouter(routes, { allowNotFound: true })

const routerMiddleware = router5Middleware(router)
const sagaMiddleware = createSagaMiddleware();

router.usePlugin(
  browserPlugin({
  })
)

const composeEnhancers =
    process.env.NODE_ENV === "production"
      ? compose
      : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware, routerMiddleware))
  );



sagaMiddleware.run(rootSaga);
router.setDependency('store', store)
router.useMiddleware(getUsersMWare);
router.start('/');


// console.log(routeNodeSelector('')(store))

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
