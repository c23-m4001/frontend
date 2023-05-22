import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterInput } from './RegisterInput'
import { register } from '../../../utils/api'

export const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    register({ name, email, password });
    navigate('/auth/login');
  };

  return (
    <div>
      <div>Logo</div>
      <div>
        <p>Register</p>
        <div>
          <p>sign up with Moneta account</p>
          <RegisterInput register={onRegister} />
        </div>
      </div>
    </div>
  )
}
