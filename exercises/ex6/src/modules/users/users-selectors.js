import { createSelector } from 'reselect'

const getUsersReducer = (state) => state.usersReducer

export const getTitle = createSelector(
  getUsersReducer,
  usersReducerState => usersReducerState.title
)

const getUsers = createSelector(
  getUsersReducer,
  usersReducerState => usersReducerState.users
)

export const getUsersList = createSelector(
  getUsers,
  users => users.map(user => ({
    ...user,
    lastName: user.lastName.toUpperCase()
  }))
)
