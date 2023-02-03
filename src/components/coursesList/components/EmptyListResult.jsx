import { Box, Typography } from '@mui/material'


const EmptyListResult = () => {
  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      gap: '30px',
    }}>
      <img src='/emptySearch.svg' alt='empty search' />
      <Typography variant="h4" component='h4'>
        No courses found
      </Typography>
    </Box>
  )
}

export default EmptyListResult