import { Types } from './users-actions'
import { createReducer } from 'reduxsauce'

const initState = {
  title: 'User List',
  data: {},
  userIds: [],
  userDetails: null
}

const usersLoaded = (state, { data, userIds }) => ({ ...state, data, userIds })

const loadUserDetails = (state, { userDetails }) => {
  console.log('change userDetails state', userDetails)
  const newstate = { ...state, userDetails }
  console.log(newstate)
  return newstate
}

const handlers = {
  [Types.USERS_LOADED]: usersLoaded,
  [Types.LOAD_USER_DETAILS]: loadUserDetails
}

export const usersReducer = createReducer(initState, handlers)
