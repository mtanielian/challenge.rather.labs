import { useContext } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../contexts/AuthContext'
import { login } from '../services/user.services'
import Swal from 'sweetalert2'

const useFormLogin = () => {
  const { setLogged } = useContext(AuthContext)
  const { handleSubmit, register, formState: { errors } } = useForm()
  const router = useRouter()  

  const loginUserWithPass = async (data) => {
    const {email, password} = data
    try {
      const {token} = await login({email, password})
      if (token) {
        setLogged(token)
        router.push('/')
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response.data.message || error.message,
      })
    }
  }

  return {
    errors,
    register,
    handleSubmit,
    loginUserWithPass
  }
}

export default useFormLogin