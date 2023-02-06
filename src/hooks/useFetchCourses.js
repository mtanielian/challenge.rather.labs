import { useContext } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getCourses, searchCourses } from '../services/course.services'
import { CoursesContext } from '../contexts/CoursesContext'

const limit = 3
const useFetchCourses = () => {
  const { searchTerm } = useContext(CoursesContext)
  
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['listCourses', searchTerm],
    queryFn: ({ pageParam = 1 }) => searchTerm ? searchCourses(searchTerm) : getCourses({ limit, page: pageParam }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage && lastPage.totalCourses > pages.length * limit) {
        return pages.length + 1
      }
      return undefined
    }
  })
  
  return {
    coursesPages: data?.pages,
    totalCourses: data?.pages[0].totalCourses,
    fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status 
  }

}

export default useFetchCourses