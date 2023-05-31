import React from 'react'
import { Icon } from '@iconify/react'

export const ThisMonthTransactionsItem = ({
  name,
  amount,
  onClick,
  onDelete,
}) => {
  return (
    <div className='flex justify-between gap-2'>
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
      <div className="flex items-center gap-1 cursor-pointer">
        <Icon
          className="text-danger"
          icon="material-symbols:delete"
          onClick={onDelete}
        />
        <Icon
          className="text-headline"
          icon="ri:edit-fill"
        />
      </div>
    </div>
  )
}
