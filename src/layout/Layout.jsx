import { Outlet } from 'react-router-dom'
import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

export const Layout = () => {
  return (
    <div>
      {/* Sidebar */}
      <Sidebar>
        {/* Header */}
        <Header>
          <Outlet />
        </Header>
      </Sidebar>
    </div>
  )
}
