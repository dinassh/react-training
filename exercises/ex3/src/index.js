import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'modules/root/components/root';

import { createStore } from 'redux'
import { rootReducer } from './modules/root/root-reducer'
import UsersActions from './modules/users/users-actions'


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : v => v)


const dispatchAddUser = (user) => {
  store.dispatch(UsersActions.Creators.addUser(user))
}


function render() {
  const state = store.getState()

  ReactDOM.render(
    <Root title={state.usersReducer.title} users={state.usersReducer.users} addUser={dispatchAddUser}/>,
    document.getElementById('root')
  )
}


// subscribe render function to store change
store.subscribe(() => render())

render()

