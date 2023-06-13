import { useState } from 'react'
import { CategoryApi } from '../../../api/categories/categoryApi'
import { Button } from '../../../components/button/Button'
import { Checkbox } from '../../../components/input/Checkbox'
import { Input } from '../../../components/input/Input'
import { useModal } from '../../../core/Modal/ModalProvider'
import { useError } from '../../../custom-hooks/useError'
import { useInput } from '../../../custom-hooks/useInput'
import { CategoryTypeEnum } from '../../../util/enum'
import { CategoryTypeSelect } from './CategoryTypeSelect'
import { useIntl } from 'react-intl'

export const EditCategory = ({ refetch, category }) => {
  const intl = useIntl()
  const { unsetModal, hideModal } = useModal()
  const [name, setName] = useInput(category.name)
  const [isExpense, setIsExpense] = useInput(category.is_expense)
  const { error, domainErrors, handleError, resetError } = useError()
  const [selectedCategoryType, setSelectedCategoryType] = useState(
    CategoryTypeEnum[category.logo_type]
  )

  const onSubmit = async (e) => {
    e.preventDefault()

    resetError()

    await CategoryApi.updateCategory({
      id: category.id,
      name,
      logo_type: selectedCategoryType.value,
      is_expense: isExpense,
    })
      .then(() => {
        if (refetch) refetch()
        unsetModal()
        hideModal()
      })
      .catch((err) => {
        handleError(err.response.data)
      })
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-56 py-2 md:w-72"
    >
      {error && <div className="error-box mb-4">{error}</div>}
      <Input
        type="text"
        name="name"
        label={intl.formatMessage({ id: 'name' })}
        placeholder={intl.formatMessage({ id: 'categoryNamePlaceholder' })}
        className="text-sm"
        value={name}
        onChange={setName}
        error={domainErrors?.name}
      />
      <CategoryTypeSelect
        className="mb-2"
        label={intl.formatMessage({ id: 'walletType' })}
        value={selectedCategoryType}
        onChange={setSelectedCategoryType}
        error={domainErrors?.logo_type}
      />
      <Checkbox
        className="mb-2"
        checked={isExpense}
        onChange={setIsExpense}
        name="is_expense"
        label={intl.formatMessage({ id: 'expense' })}
        error={domainErrors?.is_expense}
      />
      <Button className="btn btn-primary rounded-lg text-sm font-bold mt-4">
        {intl.formatMessage({ id: 'editButton' })}
      </Button>
    </form>
  )
}
