import MainLayout from '../../layouts/MainLayout'
import FormLogin from '../../components/formLogin/FormLogin'
import useValidateUser from '../../hooks/useValidateUser'
import { Grid } from '@mui/material'

const LoginPage = () => {
  return (
    <MainLayout>
      <center>
        <Grid container spacing={2} sx={{mt: 5 , display:'flex', flexDirection:'column',  width: '500px'}}>
          <Grid item xs={12} sx={{mt: 2 }}>
            <FormLogin />
          </Grid>
        </Grid>
      </center>
    </MainLayout>
  )
}

export default LoginPage

export const getServerSideProps = async (ctx) => {
  const { validationResponse } = useValidateUser(ctx.req)
  if (validationResponse.success) {
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