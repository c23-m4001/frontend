import { ProfileModal } from '../../components/modals/ProfileModal'

export const Header = ({ children }) => {
  return (
    <div className="w-full flex flex-col">
      <div className="relative">
        <div className="h-70px"></div>
        <div className="z-20 fixed top-0 left-0 right-0 px-10px md:px-20px bg-white h-70px flex items-center justify-end drop-shadow-md gap-4">
          <button
            type="button"
            onClick={() => {}}
            className="w-1/4 md:w-1/5 btn btn-primary text-xs font-light"
          >
            {' '}
            Add Transaction
          </button>
          <ProfileModal />
        </div>
      </div>
      {children}
    </div>
  )
}
