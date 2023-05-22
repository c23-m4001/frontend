import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './login/LoginPage'
import { RegisterPage } from './register/RegisterPage'

export const AuthPage = () => {
  return (
    <Routes>
      <Route
        path="/register"
        element={<RegisterPage />}
      />
      <Route
        path="/login"
        element={<LoginPage />}
      />
    </Routes>
  )
}
