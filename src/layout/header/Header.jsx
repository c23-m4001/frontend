import SVG from 'react-inlinesvg'
import { useState } from 'react'
import { ProfileModal } from '../../components/modals/ProfileModal'

export const Header = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full flex flex-col">
      <div className="relative">
        <div className="h-70px"></div>
        <div className="fixed top-0 left-0 right-0 px-10px md:px-20px bg-white h-70px flex items-center justify-end drop-shadow-md gap-4">
          <button
            type="button"
            onClick={() => {}}
            className="w-1/4 md:w-1/5 btn btn-primary text-xs font-light"
          >
            {' '}
            Add Transaction
          </button>
          <SVG
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
      {children}
    </div>
  )
}
