import MainLayout from '../layouts/MainLayout'
import TitleCourses from '../components/titleCourses/TitleCourses'
import SearchCourse from '../components/searchCourse/SearchCourse'
import CourseList from '../components/courseList/CourseList'

  
const HomePage = () => {
  
  return (
    <MainLayout>
      <TitleCourses />
      <SearchCourse />
      <CourseList /> 
    </MainLayout>
  )
}

export default HomePage