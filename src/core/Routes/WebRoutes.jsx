import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from '../../page/auth/AuthPage'

export const WebRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="auth/*"
          element={<AuthPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}
