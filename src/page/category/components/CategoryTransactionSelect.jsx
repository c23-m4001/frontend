import { CategoryApi } from '../../../api/categories/categoryApi'
import { DebouncedAsyncSelect } from '../../../components/input/DebouncedAsyncSelect'

export const CategoryTransactionSelect = ({
  error,
  className,
  label,
  value,
  onChange,
}) => {
  const loadOptions = async (inputValue) => {
    return CategoryApi.optionTransactionForm({
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
