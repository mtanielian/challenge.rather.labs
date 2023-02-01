import useFormLogin from '@/hooks/useFormLogin'
import { Button, TextField, Stack } from '@mui/material'

const FormLogin = () => {
  const { register, handleSubmit, errors, loginUserWithPass } = useFormLogin()
  return (
    <form onSubmit={handleSubmit(loginUserWithPass)}>
      <Stack spacing={1} sx={{width: '100%'}} mb={2}>
        <TextField 
          type='text'
          fullWidth
          label='Email mod'
          { ...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address'
            }
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField 
          type='password'
          fullWidth
          label='Password'
          { ...register('password', {
            required: 'Password is required',
            minLength: { value: 4, message: '+3 characters' }
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button
          variant='outlined'
          fullWidth
          type="submit" 
        >Login</Button>
      </Stack>
    </form>
  )
}

export default FormLogin