import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterInput } from './RegisterInput'

export const RegisterPage = () => {

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
