import { Creators } from 'modules/users/users-actions'

export const USERS_LIST = 'users'
export const USER_DETAILS = 'users.detail'

export const routes = [
  { name: USERS_LIST, path: '/' },
  {
    name: USER_DETAILS,
    path: '/users/:id',
    onActivate: (params) => (dispatch) => {
      console.log('onActivate users.detail', params)

      dispatch(Creators.loadUserDetails({
        id: 'user-1',
        firstName: 'Arya',
        lastName: 'Stark',
        regnalNumber: 1,
        skills:
          [{ skill: [Object], level: 10 },
          { skill: [Object], level: 10 },
          { skill: [Object], level: 10 },
          { skill: [Object], level: 10 }],
      }))
    },
  }]
