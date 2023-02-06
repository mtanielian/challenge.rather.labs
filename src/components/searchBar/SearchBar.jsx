import { FormControl, Grid, Input, InputAdornment, InputLabel } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = ({ title, handleForm, placeholder }) => {
  return (
    <form onSubmit={handleForm}>
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <FormControl fullWidth variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              {title}
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              placeholder={placeholder}
              autoComplete='off'
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
    </form>
  )
}

export default SearchBar