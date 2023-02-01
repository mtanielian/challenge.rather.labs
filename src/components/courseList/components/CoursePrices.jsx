import { Chip, Stack } from '@mui/material'

const CoursePrices = ({ course }) => {
  const { price, priceDiscount, discountRate } = course
  return (
    <Stack direction='row' spacing={1} sx={{alignItems: 'center'}}>
      <span style={{textDecoration: discountRate > 0 ? 'line-through' : 'none'}}>${price}</span>
      {priceDiscount > 0 && <span>${priceDiscount}</span>}   
      {discountRate > 0 && <Chip color="primary" variant="outlined" label={`${discountRate}% OFF`} />}
    </Stack>
  )
}

export default CoursePrices