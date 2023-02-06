import { useRouter } from 'next/router'
import useFormCourse from '../../hooks/useFormCourse'
import { 
  Box, Button, FormControl, Grid, InputAdornment, InputLabel, 
  MenuItem, Paper, Rating, Select, TextField 
} from '@mui/material'

const FormCourse = () => {
  const router = useRouter()
  const {
    ratingLabels, teachers, level, hoverLevel, discountedPrice,
    isSaving, register, errors, setLevel, setHoverLevel,
    handleSubmit, onSubmitForm
  } = useFormCourse()

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <Paper style={{ padding: 16 , maxWidth: 700}} >
        <Grid container alignItems="flex-start" spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant='standard'
              { ...register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={2}
              label="Description"
              variant='standard'
              { ...register('description')}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
          </Grid>
          {teachers.length > 0 && 
          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <InputLabel>Teacher</InputLabel>
              <Select label="Teacher"
                { ...register('teacher')}
              >
                <MenuItem value=""><em>None</em></MenuItem>
                {teachers.map(({ _id, name, lastName }) => (
                  <MenuItem key={_id} value={_id}>{name} {lastName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          }
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Price"
              variant='standard'
              { ...register('price')}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              error={!!errors.price}
              helperText={errors.price?.message}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Discount Rate"
              { ...register('discountRate')}
              variant='standard'
              defaultValue='0'
              InputProps={{
                endAdornment: <InputAdornment position="start">%</InputAdornment>,
              }}
              error={!!errors.discountRate}
              helperText={errors.discountRate?.message}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              disabled
              label="Discount Price"
              variant='standard'
              value={discountedPrice}
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Duration"
              variant='standard'
              { ...register('duration')}
              InputProps={{
                endAdornment: <InputAdornment position="start">Hours</InputAdornment>,
              }}
              error={!!errors.duration}
              helperText={errors.duration?.message}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Start Date"
              variant='standard'
              type="date"
              { ...register('dateStart')}
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.dateStart}
              helperText={errors.dateStart?.message}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="End Date"
              variant='standard'
              { ...register('dateEnd')}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.dateEnd}
              helperText={errors.dateEnd?.message}
            />
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', marginY: 1}}>
            <Box sx={{ mr: 2 }}>Level</Box>
            <Rating 
              precision={0.5} 
              name="level" 
              defaultValue={1}
              value={level} 
              min={0.5}
              max={5} 
              onChangeActive={(_, value) => setHoverLevel(value)}
              onChange={(_, value) => setLevel(value || 0.5 )}
            />
            <Box sx={{ ml: 2 }}>
              {hoverLevel > -1 ? ratingLabels[hoverLevel] : ratingLabels[level]}
            </Box>
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
          onClick={() => router.replace('/')}
        >
            CANCEL
        </Button>
      </Grid>
    </form>    
  )
}

export default FormCourse