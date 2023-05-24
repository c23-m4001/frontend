import { React, useState } from 'react'

export const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(true)
  const menus = [
    { title: 'Transaction', src: 'transaction' },
    { title: 'Wallet', src: 'wallet' },
    { title: 'Category', src: 'category' },
  ]

  return (
    <div className="flex">
      <div className="relative">
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
              className={`text-primary cursor-pointer font-extrabold text-base ml-15px origin-left duration-200`}
            >
              MONETA
            </h1>
          </div>
          <ul className="pt-6">
            {menus.map((menu, i) => (
              <li
                key={i}
                className={`flex rounded-md mt-2 p-2 cursor-pointer hover:bg-background hover:text-primary hover:fill-primary fill-current text-secondary text-sm items-center gap-x-3`}
              >
                <img
                  width={'30px'}
                  alt="sidebar menu"
                  src={`/svgs/${menu.src}.svg`}
                />
                <span className={`origin-left ml-25px`}>{menu.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </div>
  )
}
