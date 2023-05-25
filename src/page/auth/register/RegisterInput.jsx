import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useInput } from '../../../custom-hooks/useInput'
import { AuthApi } from '../../../api/auth/authApi'
import { useAuth } from '../../../core/Auth/AuthProvider'
import { Button } from '../../../components/button/Button'

export const RegisterInput = () => {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const [domainErrors, setDomainErrors] = useState({})
  const { currentUser, setToken } = useAuth()
  const navigate = useNavigate()

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
    <form onSubmit={onSubmit}>
      <input
        placeholder="name"
        className="border border-secondary rounded-md p-2 min-w-3/4 mb-4"
        name="text"
        type="text"
        value={name}
        onChange={onNameChange}
      />
      {domainErrors?.name && (
        <div className="min-w-3/4 mb-4">error: {domainErrors?.name}</div>
      )}
      <input
        placeholder="email"
        className="border border-secondary rounded-md p-2 min-w-3/4 mb-4"
        name="text"
        type="email"
        value={email}
        onChange={onEmailChange}
      />
      {domainErrors?.email && (
        <div className="min-w-3/4 mb-4">error: {domainErrors?.email}</div>
      )}
      <input
        placeholder="password"
        className="border border-secondary rounded-md p-2 min-w-3/4 mb-4"
        name="text"
        type="password"
        value={password}
        onChange={onPasswordChange}
      />
      {domainErrors?.password && (
        <div className="min-w-3/4 mb-4">error: {domainErrors?.password}</div>
      )}
      <Button
        btnName={'Register'}
        className={'bg-primary text-white rounded-md p-2 min-w-3/4 mb-4'}
        type={'submit'}
      />
    </form>
  )
}
