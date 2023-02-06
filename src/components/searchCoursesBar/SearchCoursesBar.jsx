import { useContext} from 'react'
import { CoursesContext } from '../../contexts/CoursesContext'
import SearchBar from '../searchBar/SearchBar'


const SearchCoursesBar = ({ title = 'Search Course'}) => {
  const { setSearchTerm } = useContext(CoursesContext)
  
  const handleForm = (e) => {
    e.preventDefault()
    setSearchTerm(e.target[0].value)
  }

  return (
    <SearchBar title={title} handleForm={handleForm} />
  )
}

export default SearchCoursesBar