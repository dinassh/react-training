import React from 'react'
import PropTypes from 'prop-types'
import { actions } from 'redux-router5'
import { connect } from 'react-redux'
import { getUserDetailsFormatted } from '../users-selectors'

export const UserDetail = ({ userDetails, navigateToList }) => {

  if (!userDetails) {
    console.log('Show loading screen')

    return (<React.Fragment>
      <button onClick={() => navigateToList()}>Back to list</button>
      <div>Loading...</div>
    </React.Fragment>)
  }

  return (
    <React.Fragment>
      <button onClick={() => navigateToList()}>Back to list</button>
      <h2>User details:</h2>
      <div>First Name: {userDetails.firstName}</div>
      <div>Last name: {userDetails.lastName}</div>
      <div>Skills:
        <ul>
          {userDetails.skills.map(skill =>
            <li key={skill.skill.id}>
              {skill.skill.name} {skill.level}
            </li>)}
        </ul>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  userDetails: getUserDetailsFormatted(state)
})


const mapDispatchToProps = (dispatch) => ({
  navigateToList: () => dispatch(actions.navigateTo('users'))
})

export const SmartUserDetail = connect(mapStateToProps, mapDispatchToProps)(UserDetail)
