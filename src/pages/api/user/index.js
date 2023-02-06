import { verifyTokenAndRole } from '../../../utils/jwt'
import { createUser } from '../../../libs/user'

export default function (req, res) {
  switch (req.method) {
  case 'POST':
    return createUserNew(req, res)
  default:
    return res.status(405).json({ message: 'Method not allowed' })
  } 
}


const createUserNew = async (req, res) => {
  if (!verifyTokenAndRole({ token: req.cookies.token, role: 'admin'})) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const user = await createUser(req.body)
  return res.status(200).json({ user })
}