import React from 'react'
import { Header } from './header'
import { UserList } from 'modules/users/components/user-list_function'



const Root = ({ title, users, addUser }) => {

  return (
    <div>
      <Header title={title}/>
      <UserList users={users} addUser={addUser}/>
    </div>)
};

export default Root
