import { getCourses } from '../services/course.services'
import { useEffect, useState } from 'react'

const useFetchCourses = () => {
  const [courses, setCourses] = useState([])
  const [totalCourses, setTotalCourses] = useState([])

  const loadCourses = async () => {
    try {
      const { courses, totalCourses } = await getCourses(10, 1)
      setTotalCourses(totalCourses)
      setCourses(courses)
      setCourses
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadCourses()
  }, [])
  
  return {
    courses,
    totalCourses 
  }
}

export default useFetchCourses