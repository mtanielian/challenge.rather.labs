import { useRouter } from 'next/router'
import CoursePrices from './CoursePrices'
import { formatDate } from '../../../utils/dateFormatter'
import { Button, Card, CardActions, CardContent, Divider, Rating, Typography } from '@mui/material'


const CourseListItem = ({ course }) => {
  const { _id, name, description, level, levelText, duration, dateStart } = course
  const router = useRouter()
  return (
    <Card sx={{width: 365}} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name} 
        </Typography>
        <Typography variant="h6" component="div" sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
        }}>
          {description}
        </Typography>
        <Divider sx={{marginY: 2}} />
        <CoursePrices course={course} />
        <Typography variant="body2">
          Duration: {duration} hours
        </Typography>
        <Typography variant="body2">
          Start: {formatDate(dateStart)}
        </Typography>
        <Divider sx={{marginY: 2}} />                
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Rating value={level} readOnly /> 
          <span style={{marginLeft: 5}}>{levelText}</span>
        </div>              
      </CardContent>
      <CardActions>
        <Button 
          size="small"
          onClick={() => router.replace(`/courses/${_id}`)}
        >Details</Button>
      </CardActions>
    </Card>
  )
}

export default CourseListItem