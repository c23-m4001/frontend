import { Icon } from '@iconify/react'
import { Select } from '../../../layout/header/Select/Select'
import { WalletEnums } from '../../../util/enum'

export const WalletSelect = ({ label, value, onChange }) => {
  return (
    <Select
      label={label}
      value={value}
      onChange={onChange}
      options={Object.entries(WalletEnums).map(([_, walletTypeOption]) => ({
        ...walletTypeOption,
        label: (
          <>
            <div className="flex items-center gap-x-4 hover:text-primary">
              <Icon
                icon={walletTypeOption.icon}
                width="24"
              />
              {walletTypeOption.label}
            </div>
          </>
        ),
      }))}
    />
  )
}
