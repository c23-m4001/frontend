import { CategoryApi } from '../../../api/categories/categoryApi'
import { CategoryTypeEnum } from '../../../util/enum'
import { Icon } from '@iconify/react'
import { useModal } from '../../../core/Modal/ModalProvider'
import { Button } from '../../../components/button/Button'
import { Input } from '../../../components/input/Input'

export const UserCategories = ({data, isLoading, refetch}) => {
  const { setModal, showModal, hideModal } = useModal()


  const editCategoryButtonClick = () => {
    setModal(
      <form className="flex flex-col w-56 py-2 md:w-72">
        <Input
          type="text"
          placeholder="Masukkan nama kategori"
          className="text-sm"
        />
        <Button className="btn btn-primary rounded-lg text-sm font-bold">
          Edit
        </Button>
      </form>
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
      </div>
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
      </div>
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
              className="flex text-sm py-4 border-b-2 justify-between"
            >
              <div className="flex items-center gap-x-4">
                <Icon
                  className="rounded-full bg-background text-primary w-12 h-12 p-8px"
                  alt="icon"
                  icon={CategoryTypeEnum[category.logo_type].icon}
                />
                <h3>{category.name}</h3>
              </div>
              <div className="flex gap-x-4">
                <button
                  type="button"
                  className="flex items-center bg-transparent border-none focus:outline-none"
                  onClick={() => editCategoryButtonClick}
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
                  onClick={() => deleteCategoryButtonClick(category.id)}
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
