import MainLayout from '../../layouts/MainLayout'
import useValidateUser from '../../hooks/useValidateUser'
import FormUser from '../../components/formUser/FormUser'
import { Box } from '@mui/material'

const FormUserPage = () => {
  return (
    <MainLayout>
      <Box>
        <h1>Form User</h1>
        <FormUser />
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
    props: {
    }
  }
}


export default FormUserPage

