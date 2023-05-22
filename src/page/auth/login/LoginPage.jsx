import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginInput } from './LoginInput'

export const LoginPage = () => {
  const navigate = useNavigate();

  async function onLogin({ email, password }) {
    try {
      const response = await axios.post(`${BASE_URL}/email-login`, {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      const responseJson = await response.json()
      console.log(responseJson)
      navigate('/')
      return { data: responseJson.data }
    } catch (error) {
      alert(error.message);
      return { data: null }
    }
  }

  return (
    <div>
      <div>Logo</div>
      <div>
        <p>Login</p>
        <div>sign in with google</div>
        <div>
          <p>sign in with Moneta account</p>
          <LoginInput login={onLogin} />
          <p>
            Don't have an account?{' '}
            <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
