import { Routes, Route } from 'react-router-dom'
import { Loginpage } from './login/LoginPage'

export const AuthPage = () => {
  return (
    <Routes>
      <Route
        path="/register"
        element={<Loginpage />}
      />
      <Route
        path="/login"
        element={<Loginpage />}
      />
    </Routes>
  )
}
