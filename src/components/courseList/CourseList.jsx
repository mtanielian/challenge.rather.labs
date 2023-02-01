import { Grid } from '@mui/material'
import CourseListItem from './components/CourseListItem'

const courses = [
  {
    id: 1,
    name: 'ReactJS Developer',
    description: 'Domina una de las herramientas más demandadas por el  mercado laboral para el desarrollo de interfaces web. Aprende a construir de cero un  proyecto completamente productivo.',
    price: 100,
    priceDiscount: 0,
    discountRate: 0,
    level: 1,
    levelText: 'Beginner',
    duration: 40,
    dateStart: '2023-02-01',
    dateEnd: '2021-03-15'
  },
  {
    id: 2,
    name: 'NodeJS Backend',
    description: 'Ingresa al mundo de Node.JS, el lenguaje que ofrece la mayor velocidad de procesamiento a tus aplicaciones.',
    price: 150,
    priceDiscount: 120,
    discountRate: 30,
    level: 3,
    levelText: 'Intermediate',
    duration: 60,
    dateStart: '2023-02-01',
    dateEnd: '2021-04-15'
  },
  {
    id: 3,
    name: 'ReactJS Developer',
    description: 'Domina una de las herramientas más demandadas por el  mercado laboral para el desarrollo de interfaces web. Aprende a construir de cero un  proyecto completamente productivo.',
    price: 100,
    priceDiscount: 0,
    discountRate: 0,
    level: 1,
    levelText: 'Beginner',
    duration: 40,
    dateStart: '2023-02-01',
    dateEnd: '2021-03-15'
  },
  {
    id: 4,
    name: 'NodeJS Backend',
    description: 'Ingresa al mundo de Node.JS, el lenguaje que ofrece la mayor velocidad de procesamiento a tus aplicaciones.',
    price: 150,
    priceDiscount: 120,
    discountRate: 30,
    level: 3,
    levelText: 'Intermediate',
    duration: 60,
    dateStart: '2023-02-01',
    dateEnd: '2021-04-15'
  }
]



const CourseList = () => {
  return (
    <Grid container sx={{display: 'flex', justifyContent: 'flex-start', mt: 3}} gap={2}>
      {courses.map((course) => (
        <CourseListItem key={course.id} course={course} />
      ))}
    </Grid>
  )
}

export default CourseList