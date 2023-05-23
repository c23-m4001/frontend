import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../../../custom-hooks/useInput'
import { AuthApi } from '../../../api/auth/authApi'
import { useAuth } from '../../../core/Auth/AuthProvider'

export const RegisterInput = () => {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const [domainErrors, setDomainErrors] = useState({})
  const { currentUser, setToken } = useAuth()
  const navigate = useNavigate()

  console.log('CURRE', currentUser)

  const onSubmit = async (e) => {
    e.preventDefault()

    const a = await AuthApi.emailRegister({ name, email, password }).catch(
      (er) => {
        setDomainErrors(
          er.response.data.errors.reduce((prev, err) => {
            prev[err.domain] = err.message
            return prev
          }, {})
        )
      }
    )

    setToken(a.data.token.access_token)
    navigate('/auth/login')
  }

  return (
    <form
      className="form-register"
      onSubmit={onSubmit}
    >
      <input
        placeholder="name"
        className="inputAuth"
        name="text"
        type="text"
        value={name}
        onChange={onNameChange}
      />
      {domainErrors?.name && <div>error: {domainErrors?.name}</div>}
      <input
        placeholder="email"
        className="inputAuth"
        name="text"
        type="email"
        value={email}
        onChange={onEmailChange}
      />
      {domainErrors?.email && <div>error: {domainErrors?.email}</div>}
      <input
        placeholder="password"
        className="inputAuth"
        name="text"
        type="password"
        value={password}
        onChange={onPasswordChange}
      />
      {domainErrors?.password && <div>error: {domainErrors?.password}</div>}
      <button type="submit">Register</button>
    </form>
  )
}
