import { useLocation } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import { ProfileModal } from '../../components/modals/ProfileModal'
import { useModal } from '../../core/Modal/ModalProvider'

export const Header = ({ children }) => {
  const location = useLocation()
  const { setModal, showModal } = useModal()

  const onButtonClick = () => {
    setModal(<h1> Hello World</h1>)
    showModal()
  }

  return (
    <div className="w-full flex flex-col">
      <div className="relative">
        <div className="h-70px"></div>
        <div className="z-20 fixed top-0 left-0 right-0 px-10px md:px-20px bg-white h-70px flex items-center justify-end drop-shadow-md gap-4">
          {location.pathname === '/transactions' && (
            <Button
              type="button"
              onClick={onButtonClick}
              className="rounded-md btn btn-primary text-xs"
            >
              Add Transaction
            </Button>
          )}
          <ProfileModal />
        </div>
      </div>
      {children}
    </div>
  )
}
