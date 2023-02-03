import { Skeleton } from '@mui/material'
import { Stack } from '@mui/system'

const LoadingSkeletonList = ({ items = 3 }) => {
  const itemsArray = [...new Array(items).keys()]

  return (
    <Stack spacing={2} sx={{ paddingTop: '15px'}} direction='row'>
      {itemsArray.map( (index) => <Skeleton key={index} variant='rounded' style={{width:'365px', height: '300px'}} /> )}
    </Stack>
  )
}

export default LoadingSkeletonList