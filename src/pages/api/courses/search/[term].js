import { searchCourses } from '../../../../libs/course'

export default function (req, res) {
  switch (req.method) {
  case 'GET':
    return getCoursesByTerm(req, res)
  default:
    return res.status(405).json({ message: 'Method not allowed' })
  }  
}


const getCoursesByTerm = async (req, res) => {
  const { term } = req.query
  const { courses, totalCourses } = await searchCourses(term)
 
  return res.status(200).json({ courses, totalCourses })
}