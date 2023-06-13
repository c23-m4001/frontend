import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthApi } from '../../../api/auth/authApi'
import { useAuth } from '../../../core/Auth/AuthProvider'
import { useInput } from '../../../custom-hooks/useInput'
import { Button } from '../../../components/button/Button'
import { Input } from '../../../components/input/Input'
import { useError } from '../../../custom-hooks/useError'

export const LoginInput = () => {
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const { error, domainErrors, handleError, resetError } = useError()
  const [isLoading, setIsLoading] = useState(false)
  const { setToken } = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)
    resetError()

    const a = await AuthApi.emailLogin({ email, password })
      .catch((err) => {
        handleError(err.response.data)
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
      {error && <div className="error-box mb-4">{error}</div>}
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
