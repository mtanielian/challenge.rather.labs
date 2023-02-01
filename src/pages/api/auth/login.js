import { loginUser } from '../../../libs/user'
import { singIn } from '../../../utils/jwt'

export default function (req, res) {
  switch (req.method) {
  case 'POST':
    return login(req, res)
  default:
    return res.status(405).json({ message: 'Method not allowed' })
  }
}


const login = async (req, res) => {
  const { email, password } = req.body
  
  if (email && password) {
    const user = await loginUser({ email, password })
    if (!user)
      return res.status(400).json({ message: 'User not found' })
    

    delete user.password
    const token = singIn({ user })
    return res.status(200).json({ token })
  
  } else {
    return res.status(500).json({ message: 'Missing params' })
  }
}