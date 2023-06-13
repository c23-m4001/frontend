import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useContext } from 'react'
import { createContext } from 'react'
import clsx from 'clsx'
import { useIntl } from 'react-intl'

const initialSidebarContext = {
  open: false,
  toggleOpen: () => null,
}

export const SidebarContext = createContext(initialSidebarContext)

export const useSidebar = () => useContext(SidebarContext)

export const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(false)
  const intl = useIntl()
  const menus = [
    {
      title: intl.formatMessage({ id: 'transactionTitle' }),
      icon: 'icon-park-solid:transaction',
      to: '/transactions',
    },
    {
      title: intl.formatMessage({ id: 'walletTitle' }),
      icon: 'icon-park-solid:wallet',
      to: '/wallets',
    },
    {
      title: intl.formatMessage({ id: 'categoryTitle' }),
      icon: 'bxs:category',
      to: '/categories',
    },
    {
      title: intl.formatMessage({ id: 'faq' }),
      icon: 'wpf:faq',
      to: '/faq',
    },
  ]

  return (
    <SidebarContext.Provider
      value={{
        open: open,
        toggleOpen: () => setOpen((prev) => !prev),
      }}
    >
      <div className="flex">
        <div className="relative z-30">
          <div
            className={`hidden md:block duration-300 ${
              open ? 'w-220px' : 'w-96px'
            }`}
          ></div>
          <div
            className={clsx({
              'fixed z-10 drop-shadow-md sm:translate-x-0 md:block': true,
              '-translate-x-100%': !open,
            })}
          >
            <img
              alt="sidebar opener"
              src="/svgs/sidebar-opener.svg"
              className={`absolute hidden sm:block z-10 cursor-pointer -right-3 top-12 w-7 rounded-full  ${
                !open && 'transform rotate-180'
              }`}
              onClick={() => setOpen(!open)}
            />
            <div
              className={` ${
                open ? 'w-250px' : 'w-96px'
              } bg-white h-screen p-6 pt-13 relative duration-300 overflow-x-hidden`}
            >
              <div className="flex gap-x-3 items-center">
                <img
                  alt="Moneta logo"
                  src="/svgs/moneta-logo-sidebar.svg"
                  className="cursor-pointer duration-500"
                />
                <h1 className="brand-name text-primary cursor-pointer font-extrabold text-lg ml-15px origin-left duration-200">
                  MONETA
                </h1>
                <img
                  onClick={() => setOpen(false)}
                  className="ml-auto sm:hidden"
                  height={20}
                  width={20}
                  src="/svgs/x.svg"
                />
              </div>
              <ul className="pt-6">
                {menus.map((menu, i) => (
                  <li key={i}>
                    <NavLink
                      to={menu.to}
                      onClick={() => setOpen(false)}
                      className="flex rounded-md mt-2 p-2 cursor-pointer font-medium hover:bg-background hover:text-primary text-secondary text-sm items-center gap-x-3"
                    >
                      <Icon
                        icon={menu.icon}
                        width="30"
                        className="min-w-max"
                      />
                      <span className="origin-left ml-25px">{menu.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {children}
      </div>
    </SidebarContext.Provider>
  )
}
