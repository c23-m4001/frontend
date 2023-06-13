import { Icon } from '@iconify/react'
import { Select } from '../../../layout/header/Select/Select'
import { WalletTypeEnums } from '../../../util/enum'
import { useIntl } from 'react-intl'

export const WalletTypeSelect = ({
  className,
  label,
  value,
  onChange,
  error,
}) => {
  const intl = useIntl()

  return (
    <Select
      placeholder={intl.formatMessage({ id: 'walletTypeSelectPlaceholder' })}
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
