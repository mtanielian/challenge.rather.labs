import api from './api'

export const createCourse = async (course) => {
  const {data} = await api.post('/course', course)
  return data
}

export const getCourses = async (limit = 10, page = 1) => {
  const { data } = await api.get(`/course?limit=${limit}&page=${page}`)
  console.log(data)
  return data
}