import ImageBrand from './components/ImageBrand'
import MenuLarge from './components/MenuLarge'
import MenuShort from './components/MenuShort'
import { AppBar, Toolbar, Box, Container  } from '@mui/material'

const MainAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'black'}}>
        <Container>
          <Toolbar>
            <ImageBrand />
            <MenuLarge />
            <MenuShort />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default MainAppBar