import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from '../../../contexts/AuthContext'
import { Button, IconButton, Menu, MenuItem } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

const LoginButton = () => {
  const { auth, logout } = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const router = useRouter()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      {!auth.isLogged && 
      <Button 
        variant='contained' 
        sx={{width: '150px' }}
        onClick={() => router.replace('/auth/login')} 
      >Login</Button>
      }
      {auth.isLogged && 
      <>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => router.replace('/profile')}>Profile</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </>
      }
    </>
  )
}

export default LoginButton