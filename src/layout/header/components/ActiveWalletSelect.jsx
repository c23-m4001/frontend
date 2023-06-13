import { useMemo } from 'react'
import { useAuth } from '../../../core/Auth/AuthProvider'
import { useActiveWallet } from '../../../core/wallet/ActiveWalletProvider'
import { Select } from '../Select/Select'
import { useIntl } from 'react-intl'

export const ActiveWalletSelect = ({ className }) => {
  const { activeWallet, setActiveWalletId } = useActiveWallet()
  const { currentUser } = useAuth()
  const intl = useIntl()

  const value = useMemo(() => {
    return activeWallet
      ? { label: activeWallet.name, value: activeWallet.id }
      : { label: 'All wallet', value: undefined }
  }, [activeWallet])

  const options = [
    { label: 'All wallet', value: undefined },
    ...currentUser?.wallets.map((wallet) => ({
      label: wallet.name,
      value: wallet.id,
    })),
  ]

  return (
    <div className={className}>
      <Select
        value={value}
        label={intl.formatMessage({ id: 'walletTitle' })}
        onChange={(val) => setActiveWalletId(val.value)}
        options={options}
      />
    </div>
  )
}
