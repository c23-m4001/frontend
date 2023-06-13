import { Outlet } from 'react-router-dom'
import { TransactionWrapperProvider } from './header/components/TransactionWrapperProvider'
import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'

export const Layout = () => {
  return (
    <div>
      <Sidebar>
        <TransactionWrapperProvider>
          <Header>
            <Outlet />
          </Header>
        </TransactionWrapperProvider>
      </Sidebar>
    </div>
  )
}
