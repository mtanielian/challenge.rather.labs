import api from './api'

export const createCourse = async (course) => {
  const {data} = await api.post('/course', course)
  return data
}

// export const getCourses = async (limit = 10, page = 1) => {
//   const { data } = await api.get(`/course?limit=${limit}&page=${page}`)
//   return data
// }

// Simulate a delay in the request
export const getCourses = async (limit = 10, page = 1) => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const { data } = await api.get(`/course?limit=${limit}&page=${page}`)
      resolve(data)
    }, 2000)
  })
}