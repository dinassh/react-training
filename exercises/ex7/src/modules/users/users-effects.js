import { clientInstance } from 'modules/api/api-client'

export const getUsers = () => clientInstance.get('/users')

export const addUser = (user) => clientInstance.post('/users', user)

export default { getUsers, addUser }