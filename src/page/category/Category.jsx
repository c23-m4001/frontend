import { Button } from '../../components/button/Button'
import { useModal } from '../../core/Modal/ModalProvider'
import { Input } from '../../components/input/Input'
import { DefaultCategories } from './components/DefaultCategories'

export const CategoryPage = () => {
  const defaultCategories = [
    { id: '1', name: 'Food & Beverage', src: 'food-beverage-category' },
    { id: '2', name: 'Transportation', src: 'transportation-category' },
    { id: '3', name: 'Rental', src: 'rental-category' },
    { id: '4', name: 'Water Bill', src: 'water-bill-category' },
    { id: '5', name: 'Phone Bill', src: 'phone-bill-category' },
    { id: '6', name: 'Electricity Bill', src: 'electricity-bill-category' },
    { id: '7', name: 'Education', src: 'education-category' },
    { id: '8', name: 'Pets', src: 'pets-category' },
    { id: '9', name: 'Fitness', src: 'fitness-category' },
    { id: '10', name: 'Games', src: 'games-category' },
  ]

  const customCategories = [
    { id: '1', name: 'Custom 1', src: 'custom-category' },
    { id: '2', name: 'Custom 2', src: 'custom-category' },
    { id: '3', name: 'Custom 3', src: 'custom-category' },
  ]

  const { setModal, showModal, hideModal } = useModal()

  const addCategoryButtonClick = () => {
    setModal(
      <form className="flex flex-col w-56 py-2 md:w-72">
        <Input
          type="text"
          placeholder="Masukkan nama kategori"
          className="text-sm"
        />
        <Button className="btn btn-primary rounded-lg text-sm font-bold">
          Tambah
        </Button>
      </form>
    )
    showModal()
  }

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
            // onClick={async () => {
            //   await WalletApi.deleteWallet({ id: id })
            //   hideModal()
            //   refetch()
            // }}
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

  // const categoryDetailClick = (id) => {
  //   const detail = defaultCategories.filter((category) => category.id === id)
  //   setModal(
  //     <form className="flex flex-col w-56 py-2 md:w-72">
  //       <div className="flex items-center gap-x-4">
  //         <img
  //           alt="category icon"
  //           src={`/svgs/${detail[0].src}.svg`}
  //           className="w-12"
  //         />
  //         <div className="flex flex-col gap-y-1">
  //           <h3 className="text-headline text-xl font-bold">
  //             {detail[0].name}
  //           </h3>
  //           <p className="bg-danger rounded-lg text-white text-sm w-max px-4">
  //             Expense
  //           </p>
  //         </div>
  //       </div>
  //     </form>
  //   )
  //   showModal()
  // }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col space-y-6 py-40px px-20px sm:px-100px lg:px-200px">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl sm:text-2xl xl:text-3xl text-headline">
            Category
          </h1>
          <Button
            className="btn btn-primary rounded-xl font-bold text-sm"
            type="button"
            onClick={addCategoryButtonClick}
          >
            Tambah Kategori
          </Button>
        </div>
        <div className="bg-white py-6 rounded-md">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col grow basis-50% px-6">
              <h2 className="font-bold text-base text-headline">Default</h2>
              <div className="py-4">
                <DefaultCategories />
                {/* {defaultCategories.map((category, id) => (
                  <div
                    key={id}
                    name={category.name}
                    src={category.src}
                    className="flex text-sm items-center gap-x-4 py-4 border-b-2 cursor-pointer"
                    onClick={() => categoryDetailClick(category.id)}
                  >
                    <img
                      alt="category icon"
                      src={`/svgs/${category.src}.svg`}
                    />
                    <h3>{category.name}</h3>
                  </div>
                ))} */}
              </div>
            </div>
            <div className="bg-secondary mx-20px my-10px md:m-0 h-1px md:h-auto grow md:flex-none md:w-1px"></div>
            <div className="flex flex-col grow basis-50% px-6">
              <h2 className="font-bold text-base text-headline">Custom</h2>
              <div className="py-4">
                {customCategories.map((category, id) => (
                  <div
                    key={id}
                    className="flex text-sm py-4 border-b-2 justify-between"
                  >
                    <div className="flex items-center gap-x-4">
                      <img
                        alt="category icon"
                        src={`/svgs/${category.src}.svg`}
                      />
                      <h3>{category.name}</h3>
                    </div>
                    <div className="flex gap-x-4">
                      <button
                        type="button"
                        className="flex items-center bg-transparent border-none focus:outline-none"
                        onClick={editCategoryButtonClick}
                      >
                        <img
                          alt="edit icon"
                          src="/svgs/editicon.svg"
                        />
                      </button>
                      <button
                        type="button"
                        className="flex items-center bg-transparent border-none focus:outline-none"
                        onClick={deleteCategoryButtonClick}
                      >
                        <img
                          alt="delete icon"
                          src="/svgs/deleteicon.svg"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
