import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'modules/root/components/root';


let site = {
  title: "User List",
  users: []
}


const addUser = (user) => {
  site.users = [...site.users, { id: site.users.length + 1, ...user}]
  render()
}


function render() {
  ReactDOM.render(
    <Root site={site} addUser={addUser}/>,
    document.getElementById('root')
  )
}

render()

