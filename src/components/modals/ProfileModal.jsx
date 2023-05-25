import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../core/Auth/AuthProvider'
import { Button } from '../button/Button'
import { BiHistory, BiLogOutCircle } from 'react-icons/bi'

export const ProfileModal = ({ isOpen }) => {
  const { currentUser, logout } = useAuth()

  return (
    <div
      className={`${
        isOpen ? 'active' : 'hidden'
      } fixed top-80px right-20px select-none rounded-10px flex-col bg-white p-3 md:p-6 max-w-180px md:max-w-sm md:max-h-42 drop-shadow-md`}
    >
      <div>
        <div className="flex gap-2 md:gap-4 mb-4 text-sm md:text-base">
          <img
            alt="sidebar opener"
            src="/svgs/avatar.svg"
            className={`gap-4 cursor-pointer w-10 rounded-full  ${
              !open && 'transform rotate-180'
            }`}
          />
          <div className="truncate">
            <p>{currentUser.name}</p>
            <p>{currentUser.email}</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 p-2 text-sm">
        <Link
          to={'/login-histories'}
          type="button"
          className="flex items-center text-secondary gap-2 md:gap-4"
          // onClick={navigate('/login-histories')}
        >
          <BiHistory className="flex justify-center text-2xl" />
          <p>Login History</p>
        </Link>
      </div>
      <div className="p-2 text-sm">
        <Button
          type="button"
          label="Logout"
          onClick={() => logout()}
          className="flex items-center text-secondary gap-2 md:gap-4"
        >
          <BiLogOutCircle className="flex justify-center transform rotate-180 text-2xl" />
          <p>Logout</p>
        </Button>
      </div>
    </div>
  )
}
