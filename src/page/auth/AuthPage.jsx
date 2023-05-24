import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from './login/LoginPage'
import { RegisterPage } from './register/RegisterPage'

export const AuthPage = () => {
  return (
    <Routes>
      <Route
        index
        element={<Navigate to="/auth/login" />}
      />
      <Route
        path="register"
        element={<RegisterPage />}
      />
      <Route
        path="login"
        element={<LoginPage />}
      />
    </Routes>
  )
}
