import { useInfiniteQuery } from '@tanstack/react-query'
import { getCourses } from '../services/course.services'


const useFetchCourses = () => {
  const limit = 3
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status
  } = useInfiniteQuery({
    queryKey: ['listCourses'],
    queryFn: ({ pageParam = 1 }) => getCourses(limit, pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage && lastPage.totalCourses > pages.length * limit) {
        return pages.length + 1
      }
      return undefined
    },
    keepPreviousData: true
  })

  return {
    coursesPages: data?.pages,
    totalCourses: data?.pages[0].totalCourses,
    fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status 
  }

}

export default useFetchCourses