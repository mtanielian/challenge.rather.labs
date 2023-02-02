import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Swal from 'sweetalert2'
import { getUsersByRole } from '../services/user.services'
import { ratingLabels } from '../utils/ratingLabels'
import { createCourse } from '../services/course.services'

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
  teacher: yup.string(),
  price: yup.number().typeError('Price must be a number').min(0).required(),
  discountRate: yup.number().min(0).max(100),
  priceDiscount: yup.number(),
  duration: yup.number().typeError('Duration must be a number').required(),
  dateStart: yup.date().typeError('Date start is required').required(),
  dateEnd: yup.date().typeError('Date start is required').required(),
})

const useFormCourse = () => {
  const { handleSubmit, register, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const [teachers, setTeachers] = useState([])
  const [level, setLevel] = useState(1)
  const [hoverLevel, setHoverLevel] = useState(-1)
  const [discountedPrice, setDiscountedPrice] = useState(0)
  const [isSaving, setIsSaving] = useState(false)
  const price = watch('price')
  const discountRate = watch('discountRate')
  const router = useRouter()

  useEffect(() => {
    if (price && discountRate) {
      const finalPrice = price - (price * discountRate / 100)

      setDiscountedPrice(isNaN(finalPrice) ? 0 : finalPrice.toFixed(2))
    } else if (price) {
      setDiscountedPrice(price)
    }
  }, [price, discountRate])
  
  const loadTeachers = async () => {
    try {
      const { users } = await getUsersByRole('teacher')
      setTeachers(users)
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmitForm = async (form) => {
    try {
      setIsSaving(true)
      if (form.teacher === '') {
        delete form.teacher
      }

      await createCourse({...form, discountedPrice, level, levelText: ratingLabels[level]})
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Course created successfully',
      })

      router.push('/')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.message || error.message,
      })
      setIsSaving(false)
    }
  }

  useEffect(() => {
    loadTeachers()
  }, [])

  return {
    ratingLabels,
    teachers,
    level,
    hoverLevel,
    discountedPrice,
    isSaving,
    register,
    errors,
    setLevel,
    setHoverLevel,
    handleSubmit,
    onSubmitForm
  }
}

export default useFormCourse