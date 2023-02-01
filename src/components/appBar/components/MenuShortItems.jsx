import { useRouter } from 'next/router'
import { menuItems } from '../../../utils/menuItems'
import MenuShortItemsLogin from './MenuShortItemsLogin'
import { MenuItem, Typography } from '@mui/material'


const MenuShortItems = () => {
  const router = useRouter()
  return (
    <>
      {menuItems.map(({name, path}) => (
        <MenuItem key={name} onClick={() => router.push(path)}>
          <Typography textAlign="center">{name}</Typography>
        </MenuItem>
      ))}
      <MenuShortItemsLogin />
    </>
  )
}

export default MenuShortItems