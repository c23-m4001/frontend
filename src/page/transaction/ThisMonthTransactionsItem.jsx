import React from 'react'
import { Button } from '../../components/button/Button'

export const ThisMonthTransactionsItem = ({
  name,
  amount,
  onClick,
  onDelete,
}) => {
  return (
    <div className="flex justify-between gap-2 sm:gap-4">
      <div
        className="flex flex-grow justify-between cursor-pointer"
        onClick={onClick}
      >
        <div className="flex flex-1 gap-2 items-center">
          <img
            src="/svgs/avatar.svg"
            className="w-6 hidden sm:block"
          />
          <p className="">{name}</p>
        </div>
        <div className="flex flex-1 gap-2">
          <p className="flex flex-1 justify-end items-center text-right text-green-600">
            Rp. {amount}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
        <Button
          type="button"
          className="flex items-center bg-transparent border-none focus:outline-none"
        >
          <img
            alt="add icon"
            src="/svgs/addicon.svg"
            className={`duration-500 w-4 h-4 md:w-5 md:h-5`}
          />
        </Button>
        <Button
          onClick={onDelete}
          type="button"
          className="flex items-center bg-transparent border-none focus:outline-none"
        >
          <img
            alt="add icon"
            src="/svgs/deleteicon.svg"
            className={`duration-500 w-4 h-4 md:w-5 md:h-5`}
          />
        </Button>
      </div>
    </div>
  )
}
