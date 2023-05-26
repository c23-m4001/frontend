import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthApi } from '../../../api/auth/authApi'
import { useAuth } from '../../../core/Auth/AuthProvider'
import { useInput } from '../../../custom-hooks/useInput'
import { Button } from '../../../components/button/Button'

export const LoginInput = () => {
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const [domainErrors, setDomainErrors] = useState({})
  const { setToken } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()

    const a = await AuthApi.emailLogin({ email, password }).catch((er) => {
      setDomainErrors(
        er.response.data.errors.reduce((prev, err) => {
          prev[err.domain] = err.message
          return prev
        }, {})
      )
    })

    setToken(a.data.token.access_token)
    navigate('/')
  }

  return (
    <form
      className="flex flex-col px-20px"
      onSubmit={onSubmit}
    >
      <input
        placeholder="email"
        className="block w-full border border-secondary rounded-md p-2 grow mb-4 focus:outline-primary"
        name="text"
        type="email"
        value={email}
        onChange={onEmailChange}
      />
      {domainErrors?.email && (
        <div className="grow mb-4 text-danger">error: {domainErrors?.email}</div>
      )}
      <input
        placeholder="password"
        className="block w-full border border-secondary rounded-md p-2 grow mb-4 focus:outline-primary"
        name="text"
        type="password"
        value={password}
        onChange={onPasswordChange}
      />
      {domainErrors?.password && (
        <div className="grow mb-4 text-danger">error: {domainErrors?.password}</div>
      )}
      <Button
        className={'bg-primary text-white rounded-md p-2 grow order-2 mb-4 active:bg-primary-hover'}
        type={'submit'}
      >
        Login
      </Button>


    </form>
  )
}
