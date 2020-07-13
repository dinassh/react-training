import React from 'react'
import { Header } from './header'
import { UserList } from './user-list_function'



const Root = (props) => {
  let { title, users } = props.site


  return (
    <div>
      <Header title={title}/>
      <UserList users={users} addUser={props.addUser}/>
    </div>)
};

export default Root
