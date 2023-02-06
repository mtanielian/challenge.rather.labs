import Swal from 'sweetalert2'
import { getUserByProp, deleteUser } from '../services/user.services'
import { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../contexts/UsersContext'


const useFetchUserByProp = () => {
  const { searchTerm: {prop, value} } = useContext(UsersContext)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getUser = async () => {
    try {
      setIsLoading(true)
      const data = await getUserByProp({ prop, value })
      setUser(data.user)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    if (prop && value) {
      getUser()
    }
  }, [prop, value])


  const removeUser = () => {
    const {_id, name, lastName} = user
    Swal.fire({
      title: `Are you sure remove ${name} ${lastName}?`,
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then( async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteUser(_id)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } catch (error) {
          console.log('no tiene permisos para eliminar', error)
        }

        setUser(null)
      }
    })
  }

  return {
    user, 
    isLoading,
    removeUser
  }  
}

export default useFetchUserByProp