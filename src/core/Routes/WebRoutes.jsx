import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthPage } from '../../page/auth/AuthPage'
import { useAuth } from '../Auth/AuthProvider'
import { DashboardPage } from '../../page/dashboard/Dashboard'
import { LandingPage } from '../../page/landing_page/LandingPage'

export const WebRoutes = () => {
  const { currentUser, isLoading } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        {/* TODO: improvise with loading indicator */}
        {!isLoading &&
          (currentUser ? (
            <Route
              path="/*"
              element={<DashboardPage />}
            />
          ) : (
            <>
              <Route
                path="auth/*"
                element={<AuthPage />}
              />
              <Route
                path="*"
                element={<Navigate to="/auth" />}
              />
              <Route
                path="/landingpage"
                element={<LandingPage />}
              />
            </>
          ))}
      </Routes>
    </BrowserRouter>
  )
}
