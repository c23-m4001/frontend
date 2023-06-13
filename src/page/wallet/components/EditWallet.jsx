import { useState } from 'react'
import { WalletApi } from '../../../api/wallets/walletApi'
import { Button } from '../../../components/button/Button'
import { Input } from '../../../components/input/Input'
import { useModal } from '../../../core/Modal/ModalProvider'
import { useError } from '../../../custom-hooks/useError'
import { useInput } from '../../../custom-hooks/useInput'
import { WalletTypeEnums } from '../../../util/enum'
import { WalletTypeSelect } from './WalletTypeSelect'
import { useIntl } from 'react-intl'

export const EditWallet = ({ refetch, wallet }) => {
  const intl = useIntl()
  const { unsetModal, hideModal } = useModal()
  const [name, setName] = useInput(wallet.name)
  const { error, domainErrors, handleError, resetError } = useError()
  const [selectedWalletType, setSelectedWalletType] = useState(
    WalletTypeEnums[wallet.logo_type]
  )

  const onSubmit = async (e) => {
    e.preventDefault()

    resetError()

    await WalletApi.updateWallet({
      id: wallet.id,
      name,
      logo_type: selectedWalletType.value,
    })
      .then(() => {
        if (refetch) refetch()
        unsetModal()
        hideModal()
      })
      .catch((err) => {
        handleError(err.response.data)
      })
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-56 py-2 md:w-72"
    >
      {error && <div className="error-box mb-4">{error}</div>}
      <Input
        type="text"
        name="name"
        label="Name"
        placeholder="Masukkan nama wallet"
        className="text-sm"
        value={name}
        onChange={setName}
        error={domainErrors?.name}
      />
      <WalletTypeSelect
        label="Wallet type"
        value={selectedWalletType}
        onChange={setSelectedWalletType}
        error={domainErrors?.logo_type}
      />
      <Button className="btn btn-primary rounded-lg text-sm font-bold mt-4">
        {intl.formatMessage({ id: 'editButton' })}
      </Button>
    </form>
  )
}
