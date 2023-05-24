import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../../layout/Layout'

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
          element={
            <>
          <h1 className="h-200px bg-gray-500">Transaction Page</h1>
          <h1 className="h-200px bg-gray-500">Transaction Page</h1>
          <h1 className="h-200px bg-gray-500">Transaction Page</h1>
          <h1 className="h-200px bg-gray-500">Transaction Page</h1>
          <h1 className="h-200px bg-gray-500">Transaction Page</h1>
          <h1 className="h-200px bg-gray-500">Transaction Page</h1>
          <h1 className="h-200px bg-gray-500">Transaction Page</h1>
          <h1 className="h-200px bg-gray-500">Transaction Page</h1>
          <h1 className="h-200px bg-gray-500">Transaction Page</h1>
            </>
        }
        />
      </Route>
    </Routes>
  )
}
