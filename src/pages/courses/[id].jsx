import { getCourseById } from '@/libs/course'
import { Divider, Grid } from '@mui/material'
import { useRouter } from 'next/router'
import MainLayout from '../../layouts/MainLayout'

const DetailsPage = () => {
  const router = useRouter()
  const { id } = router.query
  
  return (
    <MainLayout>
      <h1>Details Course</h1>
      <Divider />
      <Grid container>
        <Grid item xs={8}>
          Course ID: {id}
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
  const { course } = await getCourseById(ctx.params.id)
  console.log(course)


  return {
    props: {
      
    }
  }
}

