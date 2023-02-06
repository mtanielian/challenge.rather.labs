import { verifyTokenAndRole } from '../../../utils/jwt'
import { deleteUserById } from '../../../libs/user'

export default function (req, res) {
  switch (req.method) {
  // case 'GET':
  //   return retrieveUser(req, res)
  case 'DELETE':
    return deleteUser(req, res)
  default:
    return res.status(405).json({ message: 'Method not allowed' })
  }
}


const deleteUser = async (req, res) => {
  if (!verifyTokenAndRole({ token: req.cookies.token, role: 'admin'})) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  
  const { id } = req.query
  const deletedUser = await deleteUserById(id)
  return res.status(200).json({ user: deletedUser })
}