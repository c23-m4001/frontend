import React, { useState } from 'react'
import { useModal } from '../../core/Modal/ModalProvider'
import { Button } from '../../components/button/Button'
import { Select } from '../../layout/header/Select/Select'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export const ThisMonthTransactionsItem = ({
  transaction,
  onClick,
  onDelete,
}) => {
  const { setModal, showModal } = useModal()
  const [startDate, setStartDate] = useState(new Date())
  const [selectedWallet, setSelectedWallet] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const walletOptions = [
    {
      value: {
        created_at: '2023-01-01T07:00:00+07:00',
        id: '023b6735-8255-43c0-bc3d-f6d1e423612d',
        logo_type: 'DEFAULT',
        name: 'Credit',
        total_amount: 10000,
        updated_at: '2023-01-01T07:00:00+07:00',
        user_id: 'ccb77821-6289-468d-b4b2-a9b2efc60cb8',
      },
      label: 'Chocolate',
    },
    {
      value: {
        created_at: '2023-01-01T07:00:00+07:00',
        id: '023b6735-8255-43c0-bc3d-f6d1e423612d',
        logo_type: 'DEFAULT',
        name: 'Cash',
        total_amount: 900000,
        updated_at: '2023-01-01T07:00:00+07:00',
        user_id: 'ccb77821-6289-468d-b4b2-a9b2efc60cb8',
      },
      label: 'Strawberry',
    },
    {
      value: {
        created_at: '2023-01-01T07:00:00+07:00',
        id: '023b6735-8255-43c0-bc3d-f6d1e423612d',
        logo_type: 'DEFAULT',
        name: 'Bank',
        total_amount: 9000000,
        updated_at: '2023-01-01T07:00:00+07:00',
        user_id: 'ccb77821-6289-468d-b4b2-a9b2efc60cb8',
      },
      label: 'Vanilla',
    },
  ]

  const categoriesOptions = [
    { label: 'Food & Beverage', value: 'food-beverage-category' },
    { label: 'Transportation', value: 'transportation-category' },
    { label: 'Rental', value: 'rental-category' },
    { label: 'Water Bill', value: 'water-bill-category' },
    { label: 'Phone Bill', value: 'phone-bill-category' },
    { label: 'Electricity Bill', value: 'electricity-bill-category' },
    { label: 'Education', value: 'education-category' },
    { label: 'Pets', value: 'pets-category' },
    { label: 'Fitness', value: 'fitness-category' },
    { label: 'Games', value: 'games-category' },
  ]

  const onEdit = () => {
    setModal(
      <form className="grid grid-cols-3 gap-2">
        <Select
          className="col-span-1 z-40"
          label="Wallet"
          defaultValue={selectedWallet}
          onChange={setSelectedWallet}
          options={walletOptions}
        />
        <Select
          className="col-span-1"
          label="Category"
          defaultValue={selectedCategory}
          onChange={setSelectedCategory}
          options={categoriesOptions}
        />
        <div className="relative flex flex-col items-center justify-between border border-secondary rounded-md hover:border-primary">
          <label className="absolute z-10 -top-8px left-10px bg-white px-5px py-0 text-12px">
            Amount
          </label>
          <div className="flex p-10px gap-2 justify-between items-center">
            <p className="text-sm">Rp. </p>
            <input
              type="number"
              className="text-sm border-0 items-center focus:outline-none"
            />
          </div>
        </div>
        <div className="col-span-2 relative flex flex-col items-center justify-between border border-secondary rounded-md hover:border-primary">
          <label className="absolute z-10 -top-8px left-10px bg-white px-5px py-0 text-12px">
            Name
          </label>
          <div className="w-full p-10px gap-2">
            <input
              type="text"
              className="w-full text-sm border-0 items-center focus:outline-none"
              placeholder={'Masukan nama'}
            />
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-between border border-secondary rounded-md hover:border-primary">
          <label className="absolute z-10 -top-8px left-10px bg-white px-5px py-0 text-12px">
            Date
          </label>
          <div className="w-full p-10px gap-2">
            <DatePicker
              className="focus:outline-none"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <div></div>
        <div></div>
        <Button className="btn btn-primary rounded-lg">Tambah</Button>
      </form>
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
            Rp. {transaction.amount}
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
