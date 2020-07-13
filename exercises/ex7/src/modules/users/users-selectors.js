import { createSelector } from 'reselect'
import { toRoman } from 'roman-numerals'

const getUsersReducer = (state) => state.usersReducer

export const getTitle = createSelector(
  getUsersReducer,
  usersReducerState => usersReducerState.title
)

const getUsers = createSelector(
  getUsersReducer,
  usersReducerState => 
  {
    let { data, userIds } = usersReducerState
    console.log('users selector:', usersReducerState)

    return userIds.map((userId) => data.users[userId])
  }
)

export const getUsersList = createSelector(
  getUsers,
  users => users.map(user => ({
    ...user,
    lastName: user.lastName.toUpperCase(),
    firstName: `${user.firstName} ${toRoman(user.regnalNumber)}`
  }))
)


