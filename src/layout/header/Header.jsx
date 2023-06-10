import { useLocation } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import { ProfileModal } from '../../components/modals/ProfileModal'
import { useModal } from '../../core/Modal/ModalProvider'
import DatePicker from 'react-datepicker'

import { useState } from 'react'
import { Select } from './Select/Select'
import { ActiveWalletSelect } from './components/ActiveWalletSelect'
import { useSidebar } from '../sidebar/Sidebar'
import { WalletSelect } from '../../page/wallet/components/WalletSelect'
import { CategorySelect } from '../../page/category/components/CategorySelect'
import { Input } from '../../components/input/Input'
import { AddTransaction } from './components/AddTransaction'

export const Header = ({ children }) => {
  const location = useLocation()
  const { toggleOpen } = useSidebar()
  const { setModal, showModal } = useModal()

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
     
     <AddTransaction />
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
