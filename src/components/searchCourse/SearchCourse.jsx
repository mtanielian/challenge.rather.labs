import { FormControl, Grid, Input, InputAdornment, InputLabel } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'


const SearchCourse = ({ title = 'Search Course'}) => {
  return (
    <Grid container spacing={2} >
      <Grid item xs={12}>
        <FormControl fullWidth variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            {title}
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default SearchCourse