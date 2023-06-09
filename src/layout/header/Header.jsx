import { useLocation } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import { ProfileModal } from '../../components/modals/ProfileModal'
import { useModal } from '../../core/Modal/ModalProvider'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import { Select } from './Select/Select'
import { ActiveWalletSelect } from './components/ActiveWalletSelect'
import { useSidebar } from '../sidebar/Sidebar'

export const Header = ({ children }) => {
  const location = useLocation()
  const { toggleOpen } = useSidebar();
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

  // const customCategories = [
  //   { name: 'Custom 1', src: 'custom-category' },
  //   { name: 'Custom 2', src: 'custom-category' },
  //   { name: 'Custom 3', src: 'custom-category' },
  // ]

  const onButtonClick = () => {
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
          <div className="w-full p-10px gap-2 text-sm text-center">
            <DatePicker
              showIcon
              className="focus:outline-none"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Click to select a date"
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
    <div className="w-full flex flex-col h-screen">
      <div className="relative">
        <div className="z-20 sticky top-0 left-0 right-0 px-20px py-14px bg-white flex items-center justify-between drop-shadow-md gap-4">
          <div className="flex items-center">
            <Button
              type="button"
              className="sm:hidden"
            >
              <img
                alt="hamburger menu"
                src="/svgs/hamburger-menu.svg"
                onClick={() => toggleOpen()}
              />
            </Button>
            {location.pathname === '/transactions' && (
              <ActiveWalletSelect className={'ml-20px'} />
            )}
          </div>
          <div className="flex flex-row gap-4 items-center">
            {location.pathname === '/transactions' && (
              <Button
                type="button"
                onClick={onButtonClick}
                className="hidden sm:block rounded-xl btn btn-primary font-bold text-sm"
              >
                Tambah Transaksi
              </Button>
            )}
            <ProfileModal />
          </div>
        </div>
      </div>
      <div className="grow overflow-y-auto">{children}</div>
    </div>
  )
}
