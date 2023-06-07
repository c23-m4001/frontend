import { Icon } from '@iconify/react'
import { Select } from '../../../layout/header/Select/Select'
import { CategoryTypeEnum } from '../../../util/enum'

export const CategoryTypeSelect = ({ className, label, value, onChange }) => {
  return (
    <Select
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
