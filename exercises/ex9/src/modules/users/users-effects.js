import { clientInstance } from 'modules/api/api-client'

export const getUsers = () => clientInstance.get('/users')

export const addUser = (user) => clientInstance.post('/users', user)

export const getUserDetails = (userId) => {
  console.log('requested user details for id', userId)
  return clientInstance.get(`/users/${userId}`)
}

export const getSkills = () => clientInstance.get(`/skills`)

export default { getUsers, addUser, getUserDetails, getSkills }
