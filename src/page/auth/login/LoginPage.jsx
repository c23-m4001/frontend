import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginInput } from './LoginInput'
import { login } from '../../../utils/api'

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    login({ email, password });
    navigate('/');
  };

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
