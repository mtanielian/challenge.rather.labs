import { createContext, useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'

export const AuthContext = createContext({})

const AUTH_INITIAL_STATE = {
  user: null, 
  isLogged: false
}

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(AUTH_INITIAL_STATE)


  useEffect(() => {
    if (Cookies.get('token')) {
      setLogged(Cookies.get('token'))
    }
  }, [])

  const setLogged = (token) => {
    try {
      const data = jwt.decode(token)
      setAuth({ user: { ...data.user }, isLogged: true })
      Cookies.set('token', token)
    } catch (error) {
      logout()
    }
  }

  const logout = () => {
    Cookies.remove('token')
    setAuth(AUTH_INITIAL_STATE)
  }


  return (
    <AuthContext.Provider value={{ auth, setLogged, logout }}>
      {children}
    </AuthContext.Provider>
  )
}