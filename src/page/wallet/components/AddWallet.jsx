import { useState } from 'react'
import { WalletApi } from '../../../api/wallets/walletApi'
import { Button } from '../../../components/button/Button'
import { Input } from '../../../components/input/Input'
import { useModal } from '../../../core/Modal/ModalProvider'
import { useInput } from '../../../custom-hooks/useInput'
import { WalletSelect } from './WalletSelect'

export const AddWallet = ({ refetch }) => {
  const { unsetModal, hideModal } = useModal()
  const [name, setName] = useInput('')
  const [selectedWalletType, setSelectedWalletType] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()

    await WalletApi.createWallet({
      name,
      logo_type: selectedWalletType.value,
    }).then((r) => r.data)

    refetch()
    unsetModal()
    hideModal()
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-56 py-2 md:w-72"
    >
      <Input
        type="text"
        name="name"
        placeholder="Masukkan nama wallet"
        className="text-sm"
        value={name}
        onChange={setName}
      />
      <WalletSelect
        label="Wallet type"
        value={selectedWalletType}
        onChange={setSelectedWalletType}
      />
      <Button className="btn btn-primary rounded-lg text-sm font-bold mt-4">
        Tambah
      </Button>
    </form>
  )
}
