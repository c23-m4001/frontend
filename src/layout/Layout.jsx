import { Outlet } from 'react-router-dom'
import { Header } from './header/Header'

export const Layout = () => {
  return <div>
    {/* Sidebar */}

    {/* Header */}
    <Header />

    <Outlet />
  </div>
}
