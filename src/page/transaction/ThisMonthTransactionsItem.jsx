import React from 'react'

export const ThisMonthTransactionsItem = ({ name, amount, onClick }) => {
  return (
    <>
      <div className="flex cursor-pointer" onClick={onClick}>
        <div className='flex flex-1 gap-2 items-center'>
          <img
            src="/svgs/avatar.svg"
            className="w-6"
          />
          <p className="">{name}</p>
        </div>
        <p className="flex flex-1 justify-end items-center text-right text-green-600">Rp. {amount}</p>
      </div>
    </>
  )
}
