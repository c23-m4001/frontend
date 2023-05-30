import React from 'react'

export const ThisMonthTransactionsItem = ({ name, amount, }) => {
  return (
    <>
      <div className="flex gap-4 flex-1 items-center">
        <img
          src="/svgs/avatar.svg"
          className="w-6"
        />
        <p className="">{name}</p>
      </div>
      <p className="flex-1 text-right text-green-600">+Rp. {amount}</p>
    </>
  )
}
