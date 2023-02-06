import { useRouter } from 'next/router'
import useFormUser from '../../hooks/useFormUser'
import { roles } from '../../utils/roles'
import { genders } from '../../utils/genders'
import { 
  Button, TextField, Paper, Grid, FormControl, InputLabel, 
  MenuItem, Select, capitalize, FormHelperText 
} from '@mui/material'



const FormUser = () => {
  const router = useRouter()
  const { register, handleSubmit, onSubmitForm, errors, isSaving } = useFormUser()

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Paper style={{ padding: 16 , maxWidth: 700}} >
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Name"
              variant='standard'
              { ...register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant='standard'
              { ...register('lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email"
              variant='standard'
              { ...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Birth Date"
              variant='standard'
              type="date"
              { ...register('birthDate')}
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.birthDate}
              helperText={errors.birthDate?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="standard">
              <InputLabel>Gender</InputLabel>
              <Select label="Gender"
                { ...register('gender')}
              >
                {genders.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>{label}</MenuItem>
                ))}
              </Select>
              <FormHelperText error={!!errors.gender}>
                {errors.gender?.message}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="standard">
              <InputLabel>Role</InputLabel>
              <Select label="Role"
                { ...register('role')}
              >
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>{capitalize(role)}</MenuItem>
                ))}
              </Select>
              <FormHelperText error={!!errors.role}>
                {errors.role?.message}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} style={{marginBottom: 40}}>
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant='standard'
              { ...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>
        </Grid>
      </Paper>
      <Grid item xs={12} style={{ marginTop: 20, maxWidth: 730, textAlign: 'right' }}>
        <Button 
          disabled={isSaving} variant="contained" 
          color="primary" type="submit"
          style={{ marginRight: 10 }}
        >
            SAVE
        </Button>
        <Button 
          variant="contained" 
          color="error"
          onClick={() => router.replace('/user')}
        >
            CANCEL
        </Button>
      </Grid>
    </form>     
  )
}

export default FormUser