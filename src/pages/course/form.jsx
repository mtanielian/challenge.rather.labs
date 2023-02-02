import MainLayout from '../../layouts/MainLayout'
import useValidateUser from '../../hooks/useValidateUser'
import FormCourse from '../../components/formCourse/FormCourse'
import { Box } from '@mui/material'

const FormCoursePage = () => {
  return (
    <MainLayout>
      <Box>
        <h1>Form Course</h1>
        <FormCourse />
      </Box>
    </MainLayout>
  )
}

export const getServerSideProps = async (ctx) => {
  const { validationResponse } = useValidateUser(ctx.req, 'admin')
  if (!validationResponse.success) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  return {
    props: {}
  }
}


export default FormCoursePage

