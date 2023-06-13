import { Icon } from '@iconify/react'
import { Select } from '../../../layout/header/Select/Select'
import { WalletTypeEnums } from '../../../util/enum'

export const WalletTypeSelect = ({
  className,
  label,
  value,
  onChange,
  error,
}) => {
  return (
    <Select
      error={error}
      className={className}
      label={label}
      value={value}
      onChange={onChange}
      options={Object.entries(WalletTypeEnums).map(([_, walletTypeOption]) => ({
        ...walletTypeOption,
        label: (
          <>
            <div className="flex items-center gap-x-4">
              <Icon
                className="text-primary"
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
