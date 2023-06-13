import { useState } from 'react'
import { WalletApi } from '../../../api/wallets/walletApi'
import { Button } from '../../../components/button/Button'
import { Input } from '../../../components/input/Input'
import { useModal } from '../../../core/Modal/ModalProvider'
import { useError } from '../../../custom-hooks/useError'
import { useInput } from '../../../custom-hooks/useInput'
import { WalletTypeSelect } from './WalletTypeSelect'
import { useIntl } from 'react-intl'

export const AddWallet = ({ refetch }) => {
  const intl = useIntl()
  const { unsetModal, hideModal } = useModal()
  const { error, domainErrors, handleError, resetError } = useError()
  const [name, setName] = useInput('')
  const [selectedWalletType, setSelectedWalletType] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()

    resetError()

    await WalletApi.createWallet({
      name,
      logo_type: selectedWalletType?.value,
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
        label={intl.formatMessage({ id: 'name' })}
        placeholder={intl.formatMessage({ id: 'walletNamePlaceholder' })}
        className="text-sm"
        value={name}
        onChange={setName}
        error={domainErrors?.name}
      />
      <WalletTypeSelect
        label={intl.formatMessage({ id: 'walletType' })}
        value={selectedWalletType}
        onChange={setSelectedWalletType}
        error={domainErrors?.logo_type}
      />
      <Button className="btn btn-primary rounded-lg text-sm font-bold mt-4">
        {intl.formatMessage({ id: 'addButton' })}
      </Button>
    </form>
  )
}
