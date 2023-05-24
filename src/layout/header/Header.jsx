import { useIntl } from 'react-intl'
import { useAuth } from '../../core/Auth/AuthProvider'
import { Button } from '../../components/button/Button'
import { useState } from 'react'
import { ProfileModal } from '../../components/modals/ProfileModal'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const intl = useIntl()
  const { logout } = useAuth()

  console.log(isOpen)
  return (
    <div>
      <div className="fixed px-10px md:px-20px bg-white w-full h-70px flex items-center justify-end drop-shadow-md gap-4">
        <button
          type="button"
          onClick={() => {}}
          className="w-1/4 md:w-1/5 btn btn-primary text-xs font-light"
        >
          {' '}
          Add Transaction
          {/* {intl.formatMessage({ id: 'TRANSACTION.ADD' })} */}
        </button>
        <img
          alt="sidebar opener"
          src="/svgs/avatar.svg"
          className={`md:w-11 gap-4 cursor-pointer -right-3 top-12 w-7 rounded-full  ${
            !open && 'transform rotate-180'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        />
      <ProfileModal isOpen={isOpen} />
      </div>
    </div>
  )
}
