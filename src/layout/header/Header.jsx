import { useLocation } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import { ProfileModal } from '../../components/modals/ProfileModal'
import { useModal } from '../../core/Modal/ModalProvider'
import { Dropdown } from './modal/Dropdown'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

export const Header = ({ children }) => {
  const location = useLocation()
  const { setModal, showModal } = useModal()
  const [startDate, setStartDate] = useState(new Date())

  const userWallet = [
    {
      created_at: '2023-01-01T07:00:00+07:00',
      id: '023b6735-8255-43c0-bc3d-f6d1e423612d',
      logo_type: 'DEFAULT',
      name: 'Credit',
      total_amount: 10000,
      updated_at: '2023-01-01T07:00:00+07:00',
      user_id: 'ccb77821-6289-468d-b4b2-a9b2efc60cb8',
    },
    {
      created_at: '2023-01-01T07:00:00+07:00',
      id: '023b6735-8255-43c0-bc3d-f6d1e423612d',
      logo_type: 'DEFAULT',
      name: 'Cash',
      total_amount: 900000,
      updated_at: '2023-01-01T07:00:00+07:00',
      user_id: 'ccb77821-6289-468d-b4b2-a9b2efc60cb8',
    },
    {
      created_at: '2023-01-01T07:00:00+07:00',
      id: '023b6735-8255-43c0-bc3d-f6d1e423612d',
      logo_type: 'DEFAULT',
      name: 'Bank',
      total_amount: 9000000,
      updated_at: '2023-01-01T07:00:00+07:00',
      user_id: 'ccb77821-6289-468d-b4b2-a9b2efc60cb8',
    },
  ]

  const defaultCategories = [
    { name: 'Food & Beverage', src: 'food-beverage-category' },
    { name: 'Transportation', src: 'transportation-category' },
    { name: 'Rental', src: 'rental-category' },
    { name: 'Water Bill', src: 'water-bill-category' },
    { name: 'Phone Bill', src: 'phone-bill-category' },
    { name: 'Electricity Bill', src: 'electricity-bill-category' },
    { name: 'Education', src: 'education-category' },
    { name: 'Pets', src: 'pets-category' },
    { name: 'Fitness', src: 'fitness-category' },
    { name: 'Games', src: 'games-category' },
  ]

  const customCategories = [
    { name: 'Custom 1', src: 'custom-category' },
    { name: 'Custom 2', src: 'custom-category' },
    { name: 'Custom 3', src: 'custom-category' },
  ]

  const onButtonClick = () => {
    setModal(
      <form className="grid grid-cols-3 gap-2">
        <Dropdown
          array={userWallet}
          labelName={'Wallet'}
        />
        <Dropdown
          array={defaultCategories}
          labelName={'Category'}
        />
        <div className="flex flex-col border border-secondary rounded-md">
          <label className="text-xs p-1 text-secondary">Amount</label>
          <div className="flex items-center p-2 gap-2 justify-between">
            <p>Rp. </p>
            <input type="number"></input>
          </div>
        </div>
        <div className="col-span-2 flex flex-col border border-secondary rounded-md">
          <label className="text-xs p-1 text-secondary">Name</label>
          <div className="flex items-center p-2">
            <input
              type="text"
              className="w-full"
            ></input>
          </div>
        </div>
        <div className="flex flex-col border border-secondary rounded-md">
          <label className="text-xs p-1 text-secondary">Date</label>
          <div className="flex items-center p-2">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
        <Button className="btn btn-primary rounded-lg">Tambah</Button>
      </form>
    )
    showModal()
  }

  return (
    <div className="w-full flex flex-col">
      <div className="relative">
        <div className="h-70px"></div>
        <div className="z-20 fixed top-0 left-0 right-0 px-10px md:px-20px bg-white h-70px flex items-center justify-end drop-shadow-md gap-4">
          {location.pathname === '/transactions' && (
            <Button
              type="button"
              onClick={onButtonClick}
              className="rounded-md btn btn-primary text-xs"
            >
              Add Transaction
            </Button>
          )}
          <ProfileModal />
        </div>
      </div>
      {children}
    </div>
  )
}
