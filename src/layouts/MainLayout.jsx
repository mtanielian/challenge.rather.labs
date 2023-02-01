import MainAppBar from '@/components/appBar/MainAppBar'
import { Container, Grid } from '@mui/material'

const MainLayout = ({children}) => {
  return (
    <Grid container sx={{display:'flex'}}>
      <Grid item xs={12}>
        <MainAppBar />
      </Grid>
      <Grid item xs={12} sx={{mt:10, minHeight: '70vh'}}>
        <Container>
          {children}
        </Container>
      </Grid>      
    </Grid>
  )
}

export default MainLayout