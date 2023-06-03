import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthApi } from '../../../api/auth/authApi'
import { Button } from '../../../components/button/Button'
import { useAuth } from '../../../core/Auth/AuthProvider'

const GOOGLE_OAUTH_CLIENT_ID = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID
const GOOGLE_OAUTH_REDIRECT_URI =
  process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URI

export const GoogleLogin = () => {
  const [error, setError] = useState()
  const { setToken, isLoading } = useAuth()
  const location = useLocation()
  const navigate = useNavigate();

  const getAccessToken = useCallback(
    async (code) => {
      try {
        if (code) {
          const response = await AuthApi.loginGoogle({ code })
          const tokenObj = response.data?.google_login_data?.token
          if (tokenObj) {
            setToken(tokenObj?.access_token)
          } else {
            navigate("/auth/register-google", {
              state: {
                user: response.data?.google_login_data?.user_data,
              },
            })
          }
        }
      } catch (err) {
        setToken(undefined)

        if (axios.isAxiosError(err)) {
          setError(err.response?.data.message || err.message)
        } else {
          setError('The login detail is incorrect')
        }
      }
    },
    [setToken]
  )

  const redirectToGoogleAuth = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_OAUTH_CLIENT_ID}&redirect_uri=${GOOGLE_OAUTH_REDIRECT_URI}&response_type=code&scope=openid%20email`
  }

  useEffect(() => {
    const state = location.state
    if (state?.code) {
      getAccessToken(state.code)
    }
  }, [location.state, getAccessToken])

  return (
    <Button
      type="button"
      onClick={redirectToGoogleAuth}
      className="mx-20px h-12 px-6 p-2 mb-4 rounded-3xl transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100 border border-secondary"
    >
      <div className="relative flex items-center space-x-4 justify-center">
        <img
          src="/svgs/google.svg"
          className="absolute -left-2 w-5"
          alt="google logo"
        />
        <span className="block whitespace-nowrap tracking-wide text-secondary text-sm transition duration-300 group-hover:primary-hover sm:text-base">
          <h1 className="ml-2">Continue with Google</h1>
        </span>
      </div>
    </Button>
  )
}
