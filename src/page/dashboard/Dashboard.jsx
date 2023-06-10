import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../../layout/Layout'
import { TransactionPage } from '../transaction/Transaction'
import { LoginHistoryPage } from '../login_history/LoginHistory'
import { CategoryPage } from '../category/Category'
import { WalletPage } from '../wallet/Wallet'
import { useAuth } from '../../core/Auth/AuthProvider'
import { WelcomePage } from '../Welcome/Welcome'
import { ActiveWalletProvider } from '../../core/wallet/ActiveWalletProvider'
import { FrequentlyAskedQuestions } from '../faq/FrequentlyAskedQuestions'

export const DashboardPage = () => {
  const { currentUser } = useAuth()

  return (
    <ActiveWalletProvider>
      <Routes>
        {currentUser.wallets && currentUser.wallets.length > 0 ? (
          <>
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
                element={<WalletPage />}
              />

              <Route
                path="/categories"
                element={<CategoryPage />}
              />

              <Route
                path="/login-histories"
                element={<LoginHistoryPage />}
              />

              <Route
                path="/faq"
                element={<FrequentlyAskedQuestions />}
              />
            </Route>
          </>
        ) : (
          <>
            <Route
              index
              path="*"
              element={<Navigate to="/welcome" />}
            />

            <Route
              path="/welcome"
              element={<WelcomePage />}
            />
          </>
        )}
      </Routes>
    </ActiveWalletProvider>
  )
}
