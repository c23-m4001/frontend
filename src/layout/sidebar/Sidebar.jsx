import { React, useState } from 'react'

const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const menus = [
    { title: 'Transaction', src: 'transaction' },
    { title: 'Wallet', src: 'wallet' },
    { title: 'Category', src: 'category' },
  ]

  return (
    <div className="flex fixed drop-shadow-md">
      <div
        className={` ${
          open ? 'w-48' : 'w-24'
        } bg-white h-screen p-6 pt-13 relative duration-300`}
      >
        <img
          alt="sidebar opener"
          src="/svgs/sidebar-opener.svg"
          className={`absolute cursor-pointer -right-3 top-12 w-7 rounded-full  ${
            !open && 'transform rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-3 items-center">
          <img
            alt="Moneta logo"
            src="/svgs/moneta-logo-sidebar.svg"
            className={`cursor-pointer duration-500 ${open}`}
          />
          <h1
            className={`text-primary cursor-pointer font-extrabold text-base ${
              !open && 'hidden'
            } origin-left duration-200`}
          >
            MONETA
          </h1>
        </div>
        <ul className="pt-6">
          {menus.map((Menu, i) => (
            <li
              key={i}
              className={`flex rounded-md mt-2 p-2 cursor-pointer hover:bg-background hover:text-primary hover:fill-primary fill-current text-secondary text-sm items-center gap-x-3`}
            >
              <img
                alt="sidebar menu"
                src={`/svgs/${Menu.src}.svg`}
              />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
