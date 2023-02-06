import { menuItems } from '@/utils/menuItems'
import { Box, Button } from '@mui/material'
import { useRouter } from 'next/router'
import LoginButton from './LoginButton'


const MenuLarge = () => {
  const router = useRouter()
  return (
    <Box 
      sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} 
      style={{justifyContent: 'flex-end', gap: '40px', paddingRight: '40px'}}
    >
      {menuItems.map(({ name, path }) => (
        <Button
          key={name}
          sx={{ color: 'white', display: 'block' }}
          onClick={() => router.replace(path)}
        >
          {name}                  
        </Button>
      ))}
      <LoginButton />
    </Box>
  )
}

export default MenuLarge