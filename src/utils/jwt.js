import jwt from 'jsonwebtoken'

export const singIn = ({ user }) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET)
  return token
}

export const verifyTokenAndRole = ({ token, role }) => {
  try {
    const { user } = jwt.verify(token, process.env.JWT_SECRET)
    if (!user || user.role !== role) {
      return false
    }
  } catch (error) {
    return false
  }

  return true
}