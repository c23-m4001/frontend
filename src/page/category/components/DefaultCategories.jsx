import { ReactQueryKeys } from '../../../api/constant'
import { CategoryApi } from '../../../api/categories/categoryApi'
import { useQuery } from 'react-query'
import { CategoryTypeEnum } from '../../../util/enum'
import { Icon } from '@iconify/react'
import { useModal } from '../../../core/Modal/ModalProvider'
import { useIntl } from 'react-intl'

export const DefaultCategories = () => {
  const intl = useIntl()
  const { setModal, showModal } = useModal()
  const { data, isLoading } = useQuery(
    ['default', ReactQueryKeys.CATEGORIES_FILTER],
    () => CategoryApi.fetchDefaultCategories().then((r) => r.data),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )

  const categoryDetailClick = ({ category }) => {
    setModal(
      <div className="flex flex-col w-56 py-2 md:w-72">
        <div className="flex items-center gap-x-4">
          <Icon
            className="rounded-full bg-background text-primary w-12 h-12 p-8px"
            alt="icon"
            icon={CategoryTypeEnum[category.logo_type].icon}
          />
          <div className="flex flex-col gap-y-1">
            <h3 className="text-headline text-xl font-bold">{category.name}</h3>
            <p
              className={`rounded-lg text-white text-sm w-max px-4 ${
                category.is_expense ? 'bg-danger' : 'bg-primary'
              }`}
            >
              {category.is_expense ? 'Expense' : 'Income'}
            </p>
          </div>
        </div>
      </div>,
      intl.formatMessage({ id: 'categoryDetail' })
    )
    showModal()
  }

  return (
    <div>
      {!isLoading &&
        data?.categories?.map((category, idx) => {
          return (
            <div
              key={idx}
              name={category.name}
              src={category.src}
              className="flex text-sm items-center gap-x-4 py-4 border-b-2 cursor-pointer"
              onClick={() => categoryDetailClick({ category: category })}
            >
              <Icon
                className="rounded-full bg-background text-primary w-12 h-12 p-8px"
                alt="icon"
                icon={CategoryTypeEnum[category.logo_type].icon}
              />
              <h3>{category.name}</h3>
            </div>
          )
        })}
    </div>
  )
}
