import api from './api'

export const login = async ({ email, password }) => {
  const {data} = await api.post('/auth/login', { email, password })
  return data
}

export const getUsersByProp = async ({ prop, value }) => {
  console.log('getUsersByProp', prop, value)
  // Simulate a delay
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  const {data} = await api.post('/user/search', { prop, value })
  return data
}

export const createUser = async (user) => {
  const {data} = await api.post('/user', user)
  return data
}

export const deleteUser = async (id) => {
  const {data} = await api.delete(`/user/${id}`)
  return data
}