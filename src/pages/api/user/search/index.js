import { verifyTokenAndRole } from '../../../../utils/jwt'
import { getUsersByProp } from '../../../../libs/user'

export default function (req, res) {
  switch (req.method) {
  case 'POST':
    return retrieveUserByTerm(req, res)
  default:
    return res.status(405).json({ message: 'Method not allowed' })
  }
}



const retrieveUserByTerm = async (req, res) => {
  if (!verifyTokenAndRole({ token: req.cookies.token, role: 'admin'})) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  
  const { prop, value } = req.body
  const data = await getUsersByProp({ prop, value })
  return res.status(200).json({ user: data[0] ?? {} })
}