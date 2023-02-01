import api from './api'

export const addCourse = (course) => {
  return api.post('/course', course)
}