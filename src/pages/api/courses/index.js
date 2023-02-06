import jwt from 'jsonwebtoken'
import { createCourse, getCourses } from '../../../libs/course'

export default function (req, res) {
  switch (req.method) {
  case 'GET':
    return retrieveCourses(req, res)
  case 'POST':
    return createNewCourse(req, res)
  default:
    return res.status(405).json({ message: 'Method not allowed' })
  }
}

const createNewCourse = async (req, res) => {
  const { user } = jwt.verify(req.cookies.token, process.env.JWT_SECRET)
  if (!user || user.role !== 'admin') {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const course = {...req.body, userCreated: user._id}
  const newCourse = await createCourse(course)
  return res.status(200).json({ course: newCourse })
}

const retrieveCourses = async (req, res) => {
  const { limit = 10, page = 1 } = req.query
  const { courses, totalCourses } = await getCourses({ limit, page })
  
  return res.status(200).json({ courses, totalCourses })
}