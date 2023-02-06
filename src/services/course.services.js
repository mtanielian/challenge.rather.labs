import api from './api'

export const createCourse = async (course) => {
  const {data} = await api.post('/courses', course)
  return data
}

// export const getCourses = async ({ limit = 10, page = 1 }) => {
//   const { data } = await api.get(`/courses?limit=${limit}&page=${page}`)
//   return data
// }

// Simulate a delay in the request
export const getCourses = async ({ limit = 10, page = 1 }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const { data } = await api.get(`/courses?limit=${limit}&page=${page}`)
  return data
}

// export const searchCourses = async (searchTerm) => {
//   const { data } = await api.get(`/courses/search/${searchTerm}`)
//   return data
// }

// Simulate a delay in the request
export const searchCourses = async (searchTerm) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const { data } = await api.get(`/courses/search/${searchTerm}`)
  return data
}

export const getCourse = async (id) => {
  const { data } = await api.get(`/courses/${id}`)
  return data
}