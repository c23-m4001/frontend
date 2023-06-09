import { Icon } from '@iconify/react'
import { Select } from '../../../layout/header/Select/Select'
import { CategoryTypeEnum } from '../../../util/enum'
import { useIntl } from 'react-intl'

export const CategoryTypeSelect = ({
  className,
  label,
  value,
  onChange,
  error,
}) => {
  const intl = useIntl()

  return (
    <Select
      placeholder={intl.formatMessage({ id: 'categoryTypeSelectPlaceholder' })}
      error={error}
      className={className}
      label={label}
      value={value}
      onChange={onChange}
      options={Object.entries(CategoryTypeEnum).map(
        ([_, categoryTypeOption]) => ({
          ...categoryTypeOption,
          label: (
            <>
              <div className="flex items-center gap-x-4">
                <Icon
                  className="text-primary active:text-white"
                  width="24"
                  alt="icon"
                  icon={categoryTypeOption.icon}
                />
                {categoryTypeOption.label}
              </div>
            </>
          ),
        })
      )}
    />
  )
}
