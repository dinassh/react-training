import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Creators } from '../users-actions'


const DumbUserList = ({ users, addUser }) => {
  
  return (
    <React.Fragment>
      <button onClick={() => addUser({
        firstName: "Arya", 
        lastName: "Stark"}
        )}>Arya Stark</button>

      <button onClick={() => addUser({
        firstName: "Daenerys", 
        lastName: "Targaryen"}
        )}>Daenerys Targaryen</button>

      {!users.length && (<div>No Users</div>)}

      {users.map(user => <div key={user.id}>{user.firstName} {user.lastName}</div>)}
    </React.Fragment>
  )
}


DumbUserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  })),
  addUser: PropTypes.func
}


const mapStateToProps = (state) => ({
  users: state.usersReducer.users
})


const mapDispatchToProps = (dispatch) => ({
  addUser: user => dispatch(Creators.addUser(user))
})


export const UserList = connect(mapStateToProps, mapDispatchToProps)(DumbUserList)
