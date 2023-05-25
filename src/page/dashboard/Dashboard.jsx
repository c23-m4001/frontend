import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../../layout/Layout'
import { TransactionPage } from '../transaction/Transaction'
import { LoginHistoryPage } from '../login_history/LoginHistory'
import { CategoryPage } from '../category/Category'

export const DashboardPage = () => {
  return (
    <Routes>
      <Route
        index
        path="*"
        element={<Navigate to="/transactions" />}
      />

      <Route element={<Layout />}>
        <Route
          path="/transactions"
          element={<TransactionPage />}
        />

        <Route
          path="/wallets"
          element={<LoginHistoryPage />}
        />

        <Route
          path="/categories"
          element={<CategoryPage />}
        />

        <Route
          path="/login-histories"
          element={<LoginHistoryPage />}
        />
      </Route>
    </Routes>
  )
}
