import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

export const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex">
      <div className="relative">
        <div className={`duration-300 ${open ? 'w-220px' : 'w-96px'}`}></div>
        <div className="fixed z-10 drop-shadow-md">
          <img
            alt="sidebar opener"
            src="/svgs/sidebar-opener.svg"
            className={`absolute z-10 cursor-pointer -right-3 top-12 w-7 rounded-full  ${
              !open && 'transform rotate-180'
            }`}
            onClick={() => setOpen(!open)}
          />
          <div
            className={` ${
              open ? 'w-220px' : 'w-96px'
            } bg-white h-screen p-6 pt-13 relative duration-300 overflow-x-hidden`}
          >
            <div className="flex gap-x-3 items-center">
              <img
                alt="Moneta logo"
                src="/svgs/moneta-logo-sidebar.svg"
                className={`cursor-pointer duration-500`}
              />
              <h1
                className={`brand-name text-primary cursor-pointer font-extrabold text-lg ml-15px origin-left duration-200`}
              >
                MONETA
              </h1>
            </div>
            <ul className="pt-6">
              <li>
                <Link
                  to="/transactions"
                  className={`flex rounded-md mt-2 p-2 cursor-pointer font-medium hover:bg-background hover:text-primary text-secondary text-sm items-center gap-x-3`}
                >
                  <Icon
                    icon="icon-park-solid:transaction"
                    width="30"
                    className="min-w-max"
                  />
                  <span className={`origin-left ml-25px`}>Transaction</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/wallets"
                  className={`flex rounded-md mt-2 p-2 cursor-pointer font-medium hover:bg-background hover:text-primary text-secondary text-sm items-center gap-x-3`}
                >
                  <Icon
                    icon="icon-park-solid:wallet"
                    width="30"
                    className="min-w-max"
                  />
                  <span className={`origin-left ml-25px`}>Wallet</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  className={`flex rounded-md mt-2 p-2 cursor-pointer font-medium hover:bg-background hover:text-primary text-secondary text-sm items-center gap-x-3`}
                >
                  <Icon
                    icon="bxs:category"
                    width="30"
                    className="min-w-max"
                  />
                  <span className={`origin-left ml-25px`}>Category</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
