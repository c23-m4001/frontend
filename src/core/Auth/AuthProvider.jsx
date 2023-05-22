import { useQuery } from 'react-query'
import { ReactQueryKeys } from '../../api/constant'
import { UserApi } from '../../api/users/userApi'

const { createContext, useContext, useState } = require('react')

const AUTH_KEY = process.env.REACT_APP_AUTH_LOCAL_STORAGE_KEY || 'auth-token'

export const getAuthToken = () => {
  if (!localStorage) {
    return
  }

  const authToken = localStorage.getItem(AUTH_KEY)
  if (!authToken) {
    return
  }

  try {
    const authParsed = JSON.parse(authToken)
    if (authParsed) {
      return authParsed
    }
  } catch (error) {
    console.log('PARSE ERROR', error)
  }
}

export const setAuthToken = (auth) => {
  if (!localStorage) {
    return
  }

  try {
    const authToken = JSON.stringify(auth)
    localStorage.setItem(AUTH_KEY, authToken)
  } catch (error) {
    console.error('SAVE ERROR', error)
  }
}

export const removeAuthToken = () => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.removeItem(AUTH_KEY)
  } catch (error) {
    console.error('REMOVE ERROR', error)
  }
}

const initialAuthContext = {
  token: getAuthToken(),
  setToken: (token) => null,
  currentUser: undefined,
  refetchUser: () => null,
  isLoading: false,
  logout: () => null,
}

const AuthContext = createContext(initialAuthContext)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(getAuthToken())

  const {
    refetch,
    data: currentUser,
    isLoading,
  } = useQuery(
    ReactQueryKeys.USER_ME,
    () => UserApi.getMe().then((r) => r.data?.user),
    {
      cacheTime: 0,
      retry: 0,
      enabled: !!token,
      onError: () => logout(),
    }
  )

  const setToken = (newToken) => {
    if (newToken) {
      setAuthToken(newToken)
      setTokenState(newToken)
    } else {
      removeAuthToken()
    }
  }

  const logout = () => {
    setToken(undefined)
    window.location.reload()
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        currentUser,
        logout,
        isLoading,
        refetchUser: refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
