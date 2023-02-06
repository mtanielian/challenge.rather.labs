import useValidateUser from '../../hooks/useValidateUser'
import { getUserById } from '../../libs/user'
import MainLayout from '../../layouts/MainLayout'
import { Box, Button, Typography } from '@mui/material'

const UserEditPage = ({ user }) => {
  return (
    <MainLayout>
      <div>
        <h1>User Edit Page</h1>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </MainLayout>
  )
}

export default UserEditPage


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

  const user = await getUserById(ctx.params.id)
  if(!user) {
    return {
      redirect: {
        destination: '/users',
        permanent: false
      }
    }
  }

  return {
    props: {
      user
    }
  }
}