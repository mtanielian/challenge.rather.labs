import { Divider, MenuItem, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'

const MenuShortItemsLogin = () => {
  const { auth, logout } = useContext(AuthContext)
  const router = useRouter()

  return (
    <>
      <Divider />
      {!auth.isLogged && 
        <MenuItem onClick={() => router.push('/auth/login')}>
          <Typography textAlign="center">Login</Typography>
        </MenuItem>
      }
      {auth.isLogged &&
        <>
          <MenuItem onClick={() => router.push('/profile')}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <MenuItem onClick={logout}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </>
      }
    </>
  )
}

export default MenuShortItemsLogin