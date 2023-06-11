import React from 'react'
import { useModal } from '../../core/Modal/ModalProvider'
import { Button } from '../../components/button/Button'
import moment from 'moment'
import { EditTransaction } from './components/EditTransaction'

export const ThisMonthTransactionsItem = ({
  transaction,
  refetch,
  onClick,
  onDelete,
}) => {
  const { setModal, showModal } = useModal()

  const onEdit = () => {
    setModal(
      <EditTransaction
        refetch={refetch}
        transaction={transaction}
      />
    )
    showModal()
  }

  return (
    <div className="flex justify-between gap-2 sm:gap-4">
      <div
        className="flex flex-grow justify-between cursor-pointer"
        onClick={onClick}
      >
        <div className="flex flex-1 gap-2 items-center">
          <div className="mr-20px font-bold">
            {moment(transaction.date).format('DD MMMM')}
          </div>
          <img
            src="/svgs/avatar.svg"
            className="w-6 hidden sm:block"
          />
          <p className="">{transaction.name}</p>
        </div>
        <div className="flex flex-1 gap-2">
          <p className="flex flex-1 justify-end items-center text-right text-green-600">
            Rp. {Number(transaction.amount).toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1 sm:gap-2 cursor-pointer">
        <Button
          type="button"
          className="flex items-center bg-transparent border-none focus:outline-none"
          onClick={onEdit}
        >
          <img
            alt="edit icon"
            src="/svgs/editicon.svg"
            className={`duration-500 w-4 h-4 md:w-5 md:h-5`}
          />
        </Button>
        <Button
          onClick={onDelete}
          type="button"
          className="flex items-center bg-transparent border-none focus:outline-none"
        >
          <img
            alt="delete icon"
            src="/svgs/deleteicon.svg"
            className={`duration-500 w-4 h-4 md:w-5 md:h-5`}
          />
        </Button>
      </div>
    </div>
  )
}
