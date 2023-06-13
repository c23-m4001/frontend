import { useLocation } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import { ProfileModal } from '../../components/modals/ProfileModal'
import { useModal } from '../../core/Modal/ModalProvider'
import { ActiveWalletSelect } from './components/ActiveWalletSelect'
import { useSidebar } from '../sidebar/Sidebar'
import { AddTransaction } from './components/AddTransaction'
import { Icon } from '@iconify/react'
import { useIntl } from 'react-intl'
import { useTransactionWrapper } from './components/TransactionWrapperProvider'

export const Header = ({ children }) => {
  const location = useLocation()
  const { toggleOpen } = useSidebar()
  const { setModal, showModal } = useModal()
  const intl = useIntl()
  const { refetch } = useTransactionWrapper()

  const onButtonClick = (e) => {
    e.stopPropagation()

    setModal(<AddTransaction refetch={refetch} />, 'Tambah Transaksi')
    showModal()
  }

  return (
    <div className="w-full flex flex-col h-screen">
      <div className="relative">
        {location.pathname === '/transactions' && (
          <Button
            type="button"
            onClick={onButtonClick}
            className="fixed sm:hidden bottom-4 right-2 btn-rounded btn-primary font-bold text-30px"
          >
            <Icon icon={'ic:baseline-plus'} />
          </Button>
        )}
        <div className="z-20 sticky top-0 left-0 right-0 px-20px py-14px bg-white flex items-center justify-between drop-shadow-md gap-4">
          <div className="flex items-center">
            <Button
              type="button"
              className="sm:hidden"
            >
              <img
                alt="hamburger menu"
                src="/svgs/hamburger-menu.svg"
                onClick={() => toggleOpen()}
              />
            </Button>
            {location.pathname === '/transactions' && (
              <ActiveWalletSelect className={'ml-20px'} />
            )}
          </div>
          <div className="flex flex-row gap-4 items-center">
            {location.pathname === '/transactions' && (
              <Button
                type="button"
                onClick={onButtonClick}
                className="hidden sm:block rounded-xl btn btn-primary font-bold text-sm"
              >
                {intl.formatMessage({ id: 'addTransaction' })}
              </Button>
            )}
            <ProfileModal />
          </div>
        </div>
      </div>
      <div className="grow overflow-y-auto bg-background pb-10 sm:pb-0">
        {children}
      </div>
    </div>
  )
}
