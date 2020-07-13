import { Types } from './users-actions'
import { createReducer } from 'reduxsauce'

const initState = {
  title: "User List",
  users: []
}


// export const usersReducer = (state = initState, { type, payload }) => {

//   switch (type) {
//     case UsersActions.Types.ADD_USER:

//       let newUsers = [...state.users, { id: state.users.length + 1, ...payload }]
//       return { ...state, users: newUsers }

//     default:
//       return state
//   }
// }


const addUser = (state, { user }) => {
  let newUsers = [...state.users, { id: state.users.length + 1, ...user }]
  return { ...state, users: newUsers }
}


const handlers = {
  [Types.ADD_USER]: addUser
}

export const usersReducer = createReducer(initState, handlers)

