import { Icon } from '@iconify/react'
import { Select } from '../../../layout/header/Select/Select'

export const WalletSelect = ({ label, value, onChange }) => {
  const walletTypeOptions = [
    {
      label: 'Cash',
      value: 'CASH',
      icon: 'bi-cash',
    },
    {
      label: 'Bank',
      value: 'BANK',
      icon: 'ph-piggy-bank-bold',
    },
    {
      label: 'Credit Card',
      value: 'CREDIT_CARD',
      icon: 'ic:baseline-credit-card',
    },
    {
      label: 'Loan',
      value: 'LOAN',
      icon: 'uil:moneybag-alt',
    },
    {
      label: 'Insurance',
      value: 'INSURANCE',
      icon: 'material-symbols:health-and-safety-outline-rounded',
    },
    {
      label: 'Investment',
      value: 'INVESTMENT',
      icon: 'mdi:graph-line-shimmer',
    },
    {
      label: 'Mortgage',
      value: 'MORTGAGE',
      icon: 'pepicons-pop:house',
    },
    {
      label: 'Bonus',
      value: 'BONUS',
      icon: 'tabler:moneybag',
    },
    {
      label: 'Other',
      value: 'OTHER',
      icon: 'ph:question-bold',
    },
  ]

  return (
    <Select
      label={label}
      value={value}
      onChange={onChange}
      options={
        walletTypeOptions.map((walletTypeOption) => ({
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
      }))
    }
    />
  )
}
