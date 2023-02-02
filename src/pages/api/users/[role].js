import { getUsersByRole } from '../../../libs/user'

export default function (req, res) {
  switch (req.method) {
  case 'GET':
    return getUsers(req, res)
  default:
    return res.status(405).json({ message: 'Method not allowed' })
  }
}


const getUsers = async (req, res) => {
  const { role } = req.query
  const users = await getUsersByRole(role)
  return res.status(200).json({ users })
}