import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthApi } from '../../../api/auth/authApi'
import { useAuth } from '../../../core/Auth/AuthProvider'
import { useInput } from '../../../custom-hooks/useInput'
import { Button } from '../../../components/button/Button'
import { Input } from '../../../components/input/Input'
import clsx from 'clsx'

export const LoginInput = () => {
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const [domainErrors, setDomainErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const { setToken } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    const a = await AuthApi.emailLogin({ email, password })
      .catch((er) => {
        setDomainErrors(
          er.response.data.errors.reduce((prev, err) => {
            prev[err.domain] = err.message
            return prev
          }, {})
        )
      })
      .finally(() => {
        setIsLoading(false)
      })

    setToken(a.data.token.access_token)
    navigate('/')
  }

  return (
    <form
      className="flex flex-col px-20px"
      onSubmit={onSubmit}
    >
      <Input
        placeholder="Email"
        name="email"
        type="email"
        value={email}
        onChange={onEmailChange}
        error={domainErrors?.email}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        value={password}
        onChange={onPasswordChange}
        error={domainErrors?.password}
        disabled={isLoading}
      />
      <Button
        className="btn btn-primary rounded-sm mb-4"
        type={'submit'}
        disabled={isLoading}
        isLoading={isLoading}
      >
        Login
      </Button>
    </form>
  )
}
