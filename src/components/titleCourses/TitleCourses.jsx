import { Button, Grid } from '@mui/material'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'


const TitleCourses = ({ title = 'Courses Page'}) => {
  const { auth } = useContext(AuthContext)
  return (
    <Grid container spacing={2} >
      <Grid item xs={8}>
        <h1>{title}</h1>
      </Grid>
      {auth.isLogged && auth.user.role === 'admin' &&
        <Grid item xs={4} style={{alignSelf: 'center', textAlign: 'end'}}>
          <Button variant="outlined" color="primary">+ Add Course</Button>
        </Grid>
      }
    </Grid>
  )
}

export default TitleCourses