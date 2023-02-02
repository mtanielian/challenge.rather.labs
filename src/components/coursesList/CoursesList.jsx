import CourseListItem from './components/CourseListItem'
import useFetchCourses from '../../hooks/useFetchCourses'
import { Grid } from '@mui/material'

const CoursesList = () => {
  const { courses } = useFetchCourses()
  return (
    <Grid container sx={{display: 'flex', justifyContent: 'flex-start', mt: 3}} gap={2}>
      {courses.map((course) => (
        <CourseListItem key={course.id} course={course} />
      ))}
    </Grid>
  )
}

export default CoursesList