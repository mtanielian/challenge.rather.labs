import { useRouter } from 'next/router'
import useValidateUser from '../../hooks/useValidateUser'
import MainLayout from '../../layouts/MainLayout'
import { Button } from '@mui/material'
import SearchUserBar from '../../components/searchUserBar/SearchUserBar'
import SearchUserResult from '../../components/searchUserResult/SearchUserResult'

const SearchUserPage = () => {
  const router = useRouter()
  return (
    <MainLayout>
      <h1>User Page</h1>
      <Button 
        variant="contained" 
        onClick={() => router.replace('/user/form')}
        sx={{marginBottom: 4}}
      >Create User</Button>
      <SearchUserBar title='Search User' placeholder='Search by email' />
      <h5>User:</h5>
      <SearchUserResult />
    </MainLayout>
  )
}

export default SearchUserPage

export const getServerSideProps = async (ctx) => {
  const { validationResponse } = useValidateUser(ctx.req, 'admin')
  if (!validationResponse.success) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}