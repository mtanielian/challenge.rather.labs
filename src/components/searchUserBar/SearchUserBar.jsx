import { useContext} from 'react'
import { UsersContext } from '../../contexts/UsersContext'
import SearchBar from '../searchBar/SearchBar'


const SearchUserBar = ({ title= 'Search User', placeholder , prop = 'email' }) => {
  const { setSearchTerm } = useContext(UsersContext)
  
  const handleForm = (e) => {
    e.preventDefault()
    setSearchTerm({ prop, value: e.target[0].value })
  }

  return (
    <SearchBar title={title} placeholder={placeholder} handleForm={handleForm} />
  )
}

export default SearchUserBar