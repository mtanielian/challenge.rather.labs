import MainLayout from '../../layouts/MainLayout'
import useValidateUser from '../../hooks/useValidateUser'
import { getUsersByRole } from '../../services/user.services'
import { useEffect, useState } from 'react'
import { ratingLabels } from '../../utils/ratingLabels'
import { Box, Button, Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Paper, Rating, Select, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


// name: { type: String, required: true },
// description: { type: String, required: true },
// teacher: { type: 'ObjectId', ref: 'User' },
// price: { type: Number, required: true },
// priceDiscount: { type: Number },
// discountRate: { type: Number },
// level: { type: String, required: true, enum: ['0.5','1','1.5','2','2.5','3','3.5','4','4.5','5']},
// levelText: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
// duration: { type: Number, required: true },
// dateStart: { type: Date, required: true },
// dateEnd: { type: Date }

// const schema2 = yup.object().shape({
//   name: yup.string().required(),
//   description: yup.string().required(),
//   teacher: yup.string().notRequired(),
//   price: yup.number().required().message('Price is required'),
//   discountRate: yup.number().notRequired().message('Discount is required'),
//   priceDiscount: yup.number().notRequired(),
//   level: yup.string().required(),
//   levelText: yup.string().required(),
//   duration: yup.number().required().message('Duration is required'),
//   dateStart: yup.date().required().message('Date start is required'),
//   dateEnd: yup.date().required().message('Date End is required'),
// })

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
  teacher: yup.string(),
  price: yup.number().typeError('Price must be a number').min(0).required(),
  discountRate: yup.number().min(0).max(100),
  priceDiscount: yup.number(),
  // level: yup.string(),
  //levelText: yup.string().required('Level text is required'),
  duration: yup.number().typeError('Duration must be a number').required(),
  dateStart: yup.date().typeError('Date start is required').required(),
  dateEnd: yup.date().typeError('Date start is required').required(),
})


const FormCoursePage = () => {
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const [teachers, setTeachers] = useState([])
  const [level, setLevel] = useState(0)
  const [hoverLevel, setHoverLevel] = useState(-1)

  const loadTeachers = async () => {
    try {
      const { users } = await getUsersByRole('teacher')
      setTeachers(users)
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmitForm = (data) => {

    console.log(data)
  }

  useEffect(() => {
    loadTeachers()
  }, [])
  console.log(errors)

  return (
    <MainLayout>
      <Box>
        <h1>Form Course</h1>
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
                  defaultValue={0} 
                  max={5} 
                  onChangeActive={(_, value) => setHoverLevel(value)}
                  onChange={(e) => setLevel(e.target.value)} 
                  { ...register('level')}
                />
                <Box sx={{ ml: 2 }}>{hoverLevel > -1 ? ratingLabels[hoverLevel] : ratingLabels[level]}</Box>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">SAVE</Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </Box>

    </MainLayout>
  )
}

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


export default FormCoursePage

