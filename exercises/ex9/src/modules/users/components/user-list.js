import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Creators } from '../users-actions'

import { getUsersList } from '../users-selectors'

import { actions } from 'redux-router5'


const DumbUserList = ({ users, addUser, navigate, navigateToCreateForm }) => {

  // console.log(actions.navigateTo('users.detail', { id: 'user-1' }))

  return (
    <React.Fragment>
      <button onClick={() => addUser({
        firstName: "Arya",
        lastName: "Stark",
        skills: ['skill 2'],
      }
      )}>Arya Stark</button>

      <button onClick={() => addUser({
        firstName: "Daenerys",
        lastName: "Targaryen",
        skills: ['skill 1'],
      }
      )}>Daenerys Targaryen</button>

      <button onClick={navigateToCreateForm}>Add New User</button>

      {!users.length && (<div>No Users</div>)}

      {users.map(user => <div key={user.id} onClick={() => navigate(user.id)}>{user.firstName} {user.lastName}</div>)}
    </React.Fragment>
  )
}


DumbUserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    regnalNumber: PropTypes.number.isRequired
  })),
  addUser: PropTypes.func
}


const mapStateToProps = (state) => ({
  users: getUsersList(state),
})


const mapDispatchToProps = (dispatch) => ({
  addUser: user => dispatch(Creators.addUser(user)),
  navigate: (userId) => dispatch(actions.navigateTo('users.detail', { id: userId })),
  navigateToCreateForm: (userId) => dispatch(actions.navigateTo('users.create'))
})

export const UserList = connect(mapStateToProps, mapDispatchToProps)(DumbUserList)
