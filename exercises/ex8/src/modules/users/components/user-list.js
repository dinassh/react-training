import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Creators } from '../users-actions'

import { getUsersList } from '../users-selectors'

import { actions } from 'redux-router5'


const DumbUserList = ({ users, addUser, navigate }) => {

  // console.log(actions.navigateTo('users.detail', { id: 'user-1' }))

  return (
    <React.Fragment>
      <button onClick={() => addUser({
        firstName: "Arya",
        lastName: "Stark"
      }
      )}>Arya Stark</button>

      <button onClick={() => addUser({
        firstName: "Daenerys",
        lastName: "Targaryen"
      }
      )}>Daenerys Targaryen</button>

      {/* <button onClick={() => actions.navigateTo('users.detail', { id: 'user-1' })}>Show user-1</button> */}
      {/* <button onClick={() => navigate('user-1')}>Show user-1</button> */}

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
  router: state.router
})


const mapDispatchToProps = (dispatch) => ({
  addUser: user => dispatch(Creators.addUser(user)),
  navigate: (userId) => dispatch(actions.navigateTo('users.detail', { id: userId }))
})

export const UserList = connect(mapStateToProps, mapDispatchToProps)(DumbUserList)
