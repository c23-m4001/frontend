import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPage } from '../../page/auth/AuthPage'
import { useAuth } from '../Auth/AuthProvider'
import { DashboardPage } from '../../page/dashboard/Dashboard'

export const WebRoutes = () => {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <BrowserRouter>
      <Routes>
        {currentUser ? (
          <Route path="/*" element={<DashboardPage />} />
        ) : (
          <Route path="auth/*" element={<AuthPage />}
          />
        )}
      </Routes>
    </BrowserRouter>
  )
}
