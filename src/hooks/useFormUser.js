import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Swal from 'sweetalert2'
import { createUser } from '../services/user.services'

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  lastName: yup.string().required('Last name is required'),
  birthDate: yup.date().required('Birth date is required'),
  gender: yup.string().oneOf(['M', 'F', 'O']).required('Gender is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
  role: yup.string().oneOf(['student', 'teacher']).required('Role is required')
})

const useFormUser = () => {
  const { handleSubmit, register, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const [isSaving, setIsSaving] = useState(false)
  const router = useRouter()

  const onSubmitForm = async (form) => {
    try {
      setIsSaving(true)
      
      await createUser({...form})
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'User created successfully',
      })

      router.replace('/user')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || error.message,
      })
      setIsSaving(false)
    }
  }

  return {
    isSaving,
    register,
    errors,
    handleSubmit,
    onSubmitForm
  }
}

export default useFormUser