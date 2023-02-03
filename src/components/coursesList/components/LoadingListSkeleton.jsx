import { Grid, Skeleton } from '@mui/material'


const LoadingSkeletonList = ({ items = 3 }) => {
  const itemsArray = [...new Array(items).keys()]

  return (    
    <Grid container sx={{display: 'flex', justifyContent: 'flex-start', mt: 3}} gap={2}>
      {itemsArray.map( (index) => 
        <Skeleton key={index} variant='rounded' style={{width:'365px', height: '300px'}} /> 
      )}
    </Grid>
  )
}

export default LoadingSkeletonList