import { Routes, Route, Navigate } from 'react-router-dom'
import { GoogleCallback } from './components/GoogleCallback'
import { LoginPage } from './login/LoginPage'
import { RegisterGooglePage } from './register/RegisterGooglePage'
import { RegisterPage } from './register/RegisterPage'

export const AuthPage = () => {
  return (
    <Routes>
      <Route
        index
        element={<Navigate to="/auth/login" />}
      />
      <Route
        path="google-callbacks"
        element={<GoogleCallback />}
      />
      <Route
        path="register"
        element={<RegisterPage />}
      />
      <Route
        path="register-google"
        element={<RegisterGooglePage />}
      />
      <Route
        path="login"
        element={<LoginPage />}
      />
    </Routes>
  )
}
