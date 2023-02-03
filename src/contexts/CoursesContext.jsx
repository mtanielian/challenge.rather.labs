import { createContext, useState } from 'react'

export const CoursesContext = createContext()

export const CoursesProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')
  
  return (
    <CoursesContext.Provider value={{searchTerm, setSearchTerm}}>
      {children}
    </CoursesContext.Provider>
  )
}