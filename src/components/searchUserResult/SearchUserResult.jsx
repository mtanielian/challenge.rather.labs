import { useRouter } from 'next/router'
import useFetchUserByProp from '../../hooks/useFetchUserByProp'
import { Box, Button, Divider, Typography } from '@mui/material'

const SearchUserResult = () => {
  const router = useRouter()
  const { user, isLoading, removeUser } = useFetchUserByProp()

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {isLoading && <Typography variant='subtitle1'>Loading...</Typography>}
      {!isLoading && user && Object.keys(user).length === 0 && <Typography variant='subtitle1'>No user found</Typography>}
      {!isLoading && user && Object.keys(user).length > 0 &&  (
        <div>
          <Typography variant='title'>{user.name} {user.lastName} ({user.role})</Typography>
          <Typography variant='subtitle1'>{user.email}</Typography>
          {user.courses && user.courses.map(({ _id, name }) => (
            <Box key={_id}>
              <Typography variant='subtitle2'>{name}</Typography>
            </Box>
          ))}
          <div style={{marginTop: 2}}>
            <Button variant="contained" color='error' onClick={removeUser}>Delete</Button>
            <Button variant="contained" sx={{marginLeft: 2}} onClick={() => router.replace(`/user/${user._id}`)}>Edit</Button>
          </div>
          <Divider sx={{marginY: 3}} />
        </div>
      )}
    </div>
  )
}

export default SearchUserResult