import { Creators } from 'modules/users/users-actions'

export const USERS_LIST = 'users'
export const USER_DETAILS = 'users.detail'
export const USER_CREATE = 'users.create'

export const routes = [
  { name: USERS_LIST, path: '/' },
  {
    name: USER_DETAILS,
    path: '/users/:id',
  },
  {
    name: USER_CREATE,
    path: '/create',
  },
]
