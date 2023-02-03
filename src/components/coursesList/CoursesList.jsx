import CourseListItem from './components/CourseListItem'
import InfiniteScroll from 'react-infinite-scroller'
import useFetchCourses from '../../hooks/useFetchCourses'
import LoadingSkeletonList from './components/LoadingListSkeleton'
import EmptyListResult from './components/EmptyListResult'
import { Grid } from '@mui/material'

const CoursesList = () => {
  const { coursesPages, totalCourses, fetchNextPage, hasNextPage, status } = useFetchCourses()
  
  return (
    <>
      {status === 'loading' && <LoadingSkeletonList />}
      {status === 'error' || (status === 'success' && totalCourses === 0) && <EmptyListResult />}
      {status === 'success' && totalCourses > 0 && (
        <InfiniteScroll 
          hasMore={hasNextPage} 
          loadMore={fetchNextPage} 
          loader={<LoadingSkeletonList />}
        >
          <Grid container sx={{display: 'flex', justifyContent: 'flex-start', mt: 3}} gap={2}>
            {coursesPages.map(({courses}) => 
              courses.map((course) =>  (
                <CourseListItem key={course.id} course={course} />
              ))
            )}
          </Grid>
        </InfiniteScroll>
      )}
    </>
  )
}

export default CoursesList