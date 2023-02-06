import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState({ prop: '', value: '' })
  
  useEffect(() => {
    return () => {
      setSearchTerm({ prop: '', value: '' })
    }
  }, [router.pathname])

  return (
    <UsersContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </UsersContext.Provider>
  )
}