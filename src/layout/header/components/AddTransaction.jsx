import moment from 'moment/moment'
import { useState } from 'react'
import { TransactionApi } from '../../../api/transactions/transactionApi'
import { Button } from '../../../components/button/Button'
import { CustomDatePicker } from '../../../components/input/CustomDatepicker'
import { Input } from '../../../components/input/Input'
import { useModal } from '../../../core/Modal/ModalProvider'
import { useInput } from '../../../custom-hooks/useInput'
import { CategorySelect } from '../../../page/category/components/CategorySelect'
import { WalletSelect } from '../../../page/wallet/components/WalletSelect'

export const AddTransaction = ({ refetch }) => {
  const { unsetModal, hideModal } = useModal()
  const [date, setDate] = useState(new Date())
  const [selectedWallet, setSelectedWallet] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [name, setName] = useInput('')
  const [amount, setAmount] = useInput(undefined)

  const onSubmit = async (e) => {
    e.preventDefault()

    await TransactionApi.createTransaction({
      date: moment(date).format('YYYY-MM-DD'),
      name,
      amount,
      category_id: selectedCategory?.value,
      wallet_id: selectedWallet?.value,
    })

    if (refetch) refetch()
    unsetModal()
    hideModal()
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <WalletSelect
          className="col-span-1 z-40"
          label="Wallet"
          value={selectedWallet}
          onChange={setSelectedWallet}
        />
        <CategorySelect
          className="col-span-1"
          label="Category"
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
        <Input
          prefix="Rp."
          type="number"
          name="amount"
          label="Amount"
          placeholder="Masukkan jumlah transaksi"
          className="text-sm"
          value={amount}
          onChange={setAmount}
        />
        <Input
          type="text"
          name="name"
          label="Name"
          placeholder="Masukkan nama transaksi"
          className="text-sm"
          value={name}
          onChange={setName}
        />
        <CustomDatePicker
          showIcon
          label="Date"
          className="mb-4 sm:mb-0 focus:outline-none"
          selected={date}
          onChange={(date) => setDate(date)}
          placeholderText="Click to select a date"
        />
      </div>
      <Button
        type="submit"
        className="btn btn-primary rounded-lg"
      >
        Tambah
      </Button>
    </form>
  )
}
