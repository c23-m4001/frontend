import React, { useState } from 'react'
import SVG from 'react-inlinesvg'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../core/Auth/AuthProvider'
import { Button } from '../button/Button'
import { BiHistory, BiLogOutCircle } from 'react-icons/bi'

export const ProfileModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <>
      <SVG
        alt="sidebar opener"
        src="/svgs/avatar.svg"
        className={`md:w-11 gap-4 cursor-pointer -right-3 top-12 rounded-full  ${
          !open && 'transform rotate-180'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      />
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
        <div className="border-t-2"></div>
        <ul className="text-sm">
          <li>
            <Button
              type="button"
              className="flex items-center text-secondary gap-2 md:gap-4 p-2 hover:bg-background hover:text-primary w-full"
              onClick={() => {
                navigate('/login-histories')
                setIsOpen(false)
              }}
            >
              <BiHistory className="flex justify-center text-2xl" />
              <p>Login History</p>
            </Button>
          </li>
          <li>
            <Button
              type="button"
              label="Logout"
              onClick={() => logout()}
              className="flex items-center text-secondary gap-2 md:gap-4 p-2 hover:bg-background hover:text-primary w-full"
            >
              <BiLogOutCircle className="flex justify-center transform rotate-180 text-2xl" />
              <p>Logout</p>
            </Button>
          </li>
        </ul>
      </div>
    </>
  )
}
