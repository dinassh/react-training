import { createActions } from 'reduxsauce'


// // action type
// const ADD_USER = 'ADD_USER'

// // action creator
// const addUser = payload => {
//   return { type: ADD_USER,
//     payload}
// }

// export default {
//   Types: {ADD_USER},
//   Creators: {addUser}
// }


export const { Types, Creators } = createActions({
  usersLoaded: ['data', 'userIds'],
  addUser: ['user'],
  getUserDetails: ['userId'],
  loadUserDetails: ['userDetails']
}, { prefix: "users/" })
