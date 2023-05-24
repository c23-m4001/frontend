import React from 'react'
import { useAuth } from '../../core/Auth/AuthProvider'
import { Button } from '../button/Button'
import { BiHistory, BiLogOutCircle } from 'react-icons/bi'

export const ProfileModal = ({ isOpen }) => {
  const { logout } = useAuth()
  return (
    <div
      className={`${
        isOpen ? 'active' : 'hidden'
      } absolute mt-60 md:mt-72 flex-col bg-white p-3 md:p-6 max-w-180px md:max-w-sm md:max-h-42`}
    >
      <div>
        <div className="flex gap-2 md:gap-4 mb-4 text-sm md:text-base">
          <img
            alt="sidebar opener"
            src="/svgs/avatar.svg"
            className={`gap-4 cursor-pointer -right-3 top-12 w-7 rounded-full  ${
              !open && 'transform rotate-180'
            }`}
          />
          <div className='truncate'>
            <p>Alan</p>
            <p>alan@gmail.com</p>
          </div>
        </div>
      </div>
      <div className='border-t-2 p-2 text-sm'>
        <div className="flex items-center text-secondary gap-2 md:gap-4">
          <BiHistory className="flex justify-center text-2xl" />
          <p>Login History</p>
        </div>
      </div>
      <div className='p-2 text-sm'>
        <div className="flex items-center text-secondary gap-2 md:gap-4">
          <BiLogOutCircle className="flex justify-center transform rotate-180 text-2xl" />
          <Button
            type={'button'}
            btnName={'Logout'}
            className={''}
            onClick={() => logout()}
          />
        </div>
      </div>
    </div>
  )
}
