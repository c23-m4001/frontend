import { WalletApi } from '../../../api/wallets/walletApi'
import { DebouncedAsyncSelect } from '../../../components/input/DebouncedAsyncSelect'

export const WalletSelect = ({ className, label, value, onChange, error }) => {
  const loadOptions = async (inputValue) => {
    return WalletApi.fetchWallets({
      phrase: inputValue,
    }).then((r) =>
      r.data?.nodes.map((wallet) => ({
        label: wallet.name,
        value: wallet.id,
      }))
    )
  }

  return (
    <DebouncedAsyncSelect
      label={label}
      className={className}
      value={value}
      error={error}
      onChange={onChange}
      loadOptions={loadOptions}
    />
  )
}
