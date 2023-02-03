import api from './api'

export const login = async ({ email, password }) => {
  const {data} = await api.post('/auth/login', { email, password })
  return data
}

export const getUsersByRole = async (role) => {
  const {data} = await api.get(`/users/${role}`)
  return data
}