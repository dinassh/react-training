import { connect } from 'react-redux'
import { createRouteNodeSelector } from 'redux-router5'
import { UserList } from 'modules/users/components/user-list'
import { SmartUserDetail } from 'modules/users/components/user-detail'
import { endsWithSegment } from 'router5-helpers'
import React from 'react'


const RootRouteComponent = ({ route }) => {

  const { params, name } = route


  console.log('Route component rendered', route, params.id)

  const testRoute = endsWithSegment(name)

  if (testRoute('users.detail')) {
    return <SmartUserDetail/>
  }
  if (testRoute('users')) {
    return <UserList />
  }

  return null
}

// export default connect(routeNodeSelector(''))(RootRouteComponent)
export default connect(createRouteNodeSelector('users'))(RootRouteComponent)
