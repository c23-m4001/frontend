import axios from 'axios'

const { createContext, useContext, useState, useEffect } = require('react')

const AUTH_KEY = process.env.REACT_APP_AUTH_LOCAL_STORAGE_KEY || 'auth-token'

const getAuthToken = () => {
  if (!localStorage) {
    return
  }

  const authToken = localStorage.getItem(AUTH_KEY)
  if (!authToken) {
    return
  }

  try {
    const authParsed = JSON.parse(authToken)?.token
    if (authParsed) {
      return authParsed
    }
  } catch (error) {
    console.log('PARSE ERROR', error)
  }
}

const setAuthToken = (auth) => {
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

const removeAuthToken = () => {
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
  // refetchAuthToken: () => null,
  logout: () => null,
}

const AuthContext = createContext(initialAuthContext)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(getAuthToken())
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    axios
      .post('https://money-be.mikroskil.com/users/me', undefined, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((r) => r.data.data?.user)
      .then((user) => {
        setCurrentUser(user)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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
        // refetchAuth: refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
