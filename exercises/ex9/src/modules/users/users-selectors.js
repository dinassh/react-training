import { createSelector } from 'reselect'
import { toRoman } from 'roman-numerals'

const getUsersReducer = (state) => state.usersReducer

export const getTitle = createSelector(
  getUsersReducer,
  (usersReducerState) => usersReducerState.title
)

const getUsers = createSelector(
  getUsersReducer,
  (usersReducerState) => {
    let { data, userIds } = usersReducerState

    return userIds.map((userId) => data.users[userId])
  }
)

const getRegnalFirstName = (user) => `${user.firstName} ${toRoman(user.regnalNumber)}`
const getCapitalizedLastName = (user) => user.lastName.toUpperCase()
const getFormattedUser = (user) => ({
  ...user,
  lastName: getCapitalizedLastName(user),
  firstName: getRegnalFirstName(user)
})

export const getUsersList = createSelector(
  getUsers,
  (users) => users.map(user => getFormattedUser(user))
)

export const getUserDetails = createSelector(
  getUsersReducer,
  (usersReducerState) => usersReducerState.userDetails
)

export const getUserDetailsFormatted = createSelector(
  getUserDetails,
  (userDetails) => userDetails ? getFormattedUser(userDetails) : userDetails
)

export const getSkills = createSelector(
  getUsersReducer,
  (usersReducerState) => usersReducerState.skills
)
