import { useAuth } from '../../../core/Auth/AuthProvider'
import { useActiveWallet } from '../../../core/wallet/ActiveWalletProvider'
import { Select } from '../Select/Select'

export const ActiveWalletSelect = () => {
  const { activeWallet, setActiveWalletId } = useActiveWallet()
  const { currentUser } = useAuth()

  const defaultValue = activeWallet
    ? { label: activeWallet.name, value: activeWallet.id }
    : { label: 'All wallet', value: undefined }
  const options = [
    { label: 'All wallet', value: undefined },
    ...currentUser?.wallets.map((wallet) => ({
      label: wallet.name,
      value: wallet.id,
    })),
  ]

  return (
    <div>
      <Select
        defaultValue={defaultValue}
        onChange={(val) => setActiveWalletId(val.value)}
        options={options}
      />
    </div>
  )
}
