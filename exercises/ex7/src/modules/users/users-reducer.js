import { Types } from './users-actions'
import { createReducer } from 'reduxsauce'

const initState = {
  title: 'User List',
  data: {},
  userIds: []
}

const usersLoaded = (state, { data, userIds }) => {
  console.log('usersreducer:', data, userIds)

  return { ...state, data, userIds }
}

const handlers = {
  [Types.USERS_LOADED]: usersLoaded
}

export const usersReducer = createReducer(initState, handlers)

