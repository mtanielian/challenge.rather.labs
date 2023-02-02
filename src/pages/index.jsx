import MainLayout from '../layouts/MainLayout'
import TitleCourses from '../components/titleCourses/TitleCourses'
import SearchCourse from '../components/searchCourse/SearchCourse'
import CoursesList from '../components/coursesList/CoursesList'

  
const HomePage = () => {
  
  return (
    <MainLayout>
      <TitleCourses />
      <SearchCourse />
      <CoursesList /> 
    </MainLayout>
  )
}

export default HomePage