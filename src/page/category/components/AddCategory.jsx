import { useState } from 'react'
import { CategoryApi } from '../../../api/categories/categoryApi'
import { Button } from '../../../components/button/Button'
import { Checkbox } from '../../../components/input/Checkbox'
import { Input } from '../../../components/input/Input'
import { useModal } from '../../../core/Modal/ModalProvider'
import { useInput } from '../../../custom-hooks/useInput'
import { CategoryTypeSelect } from './CategoryTypeSelect'

export const AddCategory = ({ refetch }) => {
  const { unsetModal, hideModal } = useModal()
  const [name, setName] = useInput('')
  const [isExpense, setIsExpense] = useInput(false)
  const [selectedCategoryType, setSelectedCategoryType] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()

    await CategoryApi.createCategory({
      name,
      logo_type: selectedCategoryType.value,
      is_expense: isExpense,
    }).then((r) => r.data)

    if (refetch) {
      refetch()
    }
    unsetModal()
    hideModal()
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-56 py-2 md:w-72"
    >
      <Input
        type="text"
        name="name"
        label="Name"
        placeholder="Masukkan nama kategori"
        className="text-sm"
        value={name}
        onChange={setName}
      />
      <CategoryTypeSelect
        className="mb-2"
        label="Category type"
        value={selectedCategoryType}
        onChange={setSelectedCategoryType}
      />
      <Checkbox
        className="mb-2"
        checked={isExpense}
        onChange={setIsExpense}
        name="is_expense"
        label="Expense"
      />
      <Button className="btn btn-primary rounded-lg text-sm font-bold mt-4">
        Tambah
      </Button>
    </form>
  )
}
