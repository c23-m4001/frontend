import { CategoryApi } from '../../../api/categories/categoryApi'
import { CategoryTypeEnum } from '../../../util/enum'
import { Icon } from '@iconify/react'
import { useModal } from '../../../core/Modal/ModalProvider'
import { Button } from '../../../components/button/Button'
import { EditCategory } from './EditCategory'
import clsx from 'clsx'

export const UserCategories = ({ data, isLoading, refetch }) => {
  const { setModal, showModal, hideModal } = useModal()

  const editCategoryButtonClick = ({ category }) => {
    setModal(
      <EditCategory
        refetch={refetch}
        category={category}
      />,
      'Edit Kategori'
    )
    showModal()
  }

  const deleteCategoryButtonClick = (id) => {
    setModal(
      <div className="flex flex-col justify-center py-4 text-center gap-4">
        <p>Anda yakin ingin menghapus kategori ini?</p>
        <div className="flex justify-center gap-4 text-sm">
          <Button
            type={'button'}
            className="btn bg-danger text-white rounded-full"
            onClick={async () => {
              await CategoryApi.deleteCategory({ id: id })
              hideModal()
              refetch()
            }}
          >
            Hapus
          </Button>
          <Button
            type={'button'}
            className="btn bg-white border border-paragraph text-paragraph rounded-full"
            onClick={() => hideModal()}
          >
            Batal
          </Button>
        </div>
      </div>,
      'Hapus Kategori'
    )
    showModal()
  }

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
      'Detail Kategori'
    )
    showModal()
  }

  return (
    <div>
      {!isLoading &&
        data?.nodes?.map((category, idx) => {
          return (
            <div
              key={idx}
              className="flex text-sm py-4 border-b-2 justify-between cursor-pointer"
              onClick={() => categoryDetailClick({ category: category })}
            >
              <div className="flex items-center gap-x-4">
                <Icon
                  className="rounded-full bg-background text-primary w-12 h-12 p-8px"
                  alt="icon"
                  icon={CategoryTypeEnum[category.logo_type].icon}
                />
                <div className="flex flex-col justify-center items-start">
                  <h3 className="ml-1 font-bold">{category.name}</h3>
                  <div
                    className={clsx({
                      'mt-1 sm:mt-0 badge text-primary-inverse': true,
                      'bg-danger': category.is_expense,
                      'bg-primary': !category.is_expense,
                    })}
                  >
                    {category.is_expense ? 'Expense' : 'Income'}
                  </div>
                </div>
              </div>
              <div className="flex gap-x-4">
                <button
                  type="button"
                  className="flex items-center bg-transparent border-none focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation()
                    editCategoryButtonClick({ category })
                  }}
                >
                  <img
                    alt="edit icon"
                    src="/svgs/editicon.svg"
                    className="w-6 h-6"
                  />
                </button>
                <button
                  type="button"
                  className="flex items-center bg-transparent border-none focus:outline-none"
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteCategoryButtonClick(category.id)
                  }}
                >
                  <img
                    alt="delete icon"
                    src="/svgs/deleteicon.svg"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          )
        })}
    </div>
  )
}
