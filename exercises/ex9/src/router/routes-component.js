import { connect } from 'react-redux'
import { createRouteNodeSelector } from 'redux-router5'
import { UserList } from 'modules/users/components/user-list'
import { SmartUserDetail } from 'modules/users/components/user-detail'
import { endsWithSegment } from 'router5-helpers'
import React from 'react'

import { AddUserForm } from 'modules/forms/form-fields'

const RootRouteComponent = ({ route }) => {

  const { params, name } = route


  console.log('Route component rendered', route, params.id)

  const testRoute = endsWithSegment(name)

  if (testRoute('users.detail')) {
    return <SmartUserDetail />
  }
  if (testRoute('create')) {
    return (
      <React.Fragment>
        <AddUserForm />
        <UserList />
      </React.Fragment>)
  }
  if (testRoute('users')) {
    // TODO add an addUser button here!

    return (
      <React.Fragment>
        {/* <button>Add User</button> */}
        {/* <AddUserForm /> */}
        <UserList />
      </React.Fragment>
    )
  }

  return null
}

// export default connect(routeNodeSelector(''))(RootRouteComponent)
export default connect(createRouteNodeSelector('users'))(RootRouteComponent)
