import jwt from 'jsonwebtoken'

const useValidateUser = (req, role) => {
  const { token } = req.cookies
  let validationResponse = { success : false }

  try {
    const { user } = jwt.verify(token, process.env.JWT_SECRET)
    if (user && (!role || user.role === role)) {
      validationResponse = {
        success : true,
        user,
      }
    }
  } catch (err) {
    return { validationResponse }
  }


  return { validationResponse }
}

export default useValidateUser