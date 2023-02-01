import api from './api'

export const login = async ({ email, password }) => {
  console.log('login: ', email, password)
  const {data} = await api.post('/auth/login', { email, password })
  return data
}