import useValidateUser from '@/hooks/useValidateUser'
import { getCourseById } from '../../libs/course'
import MainLayout from '../../layouts/MainLayout'
import { Divider, Grid } from '@mui/material'

const DetailsPage = ({ course }) => {
  
  return (
    <MainLayout>
      <h1>Details Course</h1>
      <Divider />
      <Grid container>
        <Grid item xs={8}>
          Course:
          <pre>{JSON.stringify(course, null, 2)}</pre>
        </Grid>
        <Grid item xs={4}>
          Alumnos
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default DetailsPage

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params
  const { course } = await getCourseById(id)
  if (!course) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }


  return {
    props: {
      course
    }
  }
}

