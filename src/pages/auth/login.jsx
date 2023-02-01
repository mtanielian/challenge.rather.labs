import { Grid } from '@mui/material'
import MainLayout from '../../layouts/MainLayout'
import FormLogin from '../../components/formLogin/FormLogin'

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