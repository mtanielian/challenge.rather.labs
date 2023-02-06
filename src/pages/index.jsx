import MainLayout from '../layouts/MainLayout'
import TitleCourses from '../components/titleCourses/TitleCourses'
import SearchCoursesBar from '../components/searchCoursesBar/SearchCoursesBar'
import CoursesList from '../components/coursesList/CoursesList'

  
const HomePage = () => {
  
  return (
    <MainLayout>
      <TitleCourses />
      <SearchCoursesBar />
      <CoursesList /> 
    </MainLayout>
  )
}

export default HomePage