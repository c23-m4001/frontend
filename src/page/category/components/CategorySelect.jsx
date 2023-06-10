import { CategoryApi } from '../../../api/categories/categoryApi'
import { DebouncedAsyncSelect } from '../../../components/input/DebouncedAsyncSelect'

export const CategorySelect = ({ className, label, value, onChange }) => {
  const loadOptions = async (inputValue) => {
    return CategoryApi.fetchCategories({
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
      onChange={onChange}
      loadOptions={loadOptions}
    />
  )
}
