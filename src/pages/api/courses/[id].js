import { getCourseById } from '../../../libs/course'

export default function (req, res) {
  res.status(200).json({ name: 'Example' })
  switch (req.method) {
  case 'GET':
    return getCourse(req, res)
  default:
    return res.status(405).json({ message: 'Method not allowed' })
  }
}



const getCourse = async (req, res) => {
  const { id } = req.query
  const course = await getCourseById(id)
  return res.status(200).json({course})
}