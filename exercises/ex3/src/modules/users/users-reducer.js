import UsersActions from './users-actions'


const initState = {
  title: "User List",
  users: []
}


export const usersReducer = (state = initState, { type, payload }) => {

  switch (type) {
    case UsersActions.Types.ADD_USER:

      let newUsers = [...state.users, { id: state.users.length + 1, ...payload }]
      return { ...state, users: newUsers }

    default:
      return state
  }
}