import { Typography } from '@mui/material'

const ImageBrand = () => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"              
      >
        <img src="/logoBrand.jpg" alt="Rather Labs" width="50px" height="50px" />
      </Typography>
      <Typography variant='subtitle' component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
        RATHER <br/>LABS
      </Typography>
    </>
  )
}

export default ImageBrand