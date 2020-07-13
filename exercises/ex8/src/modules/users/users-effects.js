import { clientInstance } from 'modules/api/api-client'

export const getUsers = () => clientInstance.get('/users')

export const addUser = (user) => clientInstance.post('/users', user)

export const getUserDetails = (userId) => {
  return clientInstance.get(`/users/${userId}`)
}

export default { getUsers, addUser, getUserDetails }