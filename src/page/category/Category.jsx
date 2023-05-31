import { Button } from '../../components/button/Button'

export const CategoryPage = () => {
  const defaultCategories = [
    { name: 'Food & Beverage', src: 'food-beverage-category' },
    { name: 'Transportation', src: 'transportation-category' },
    { name: 'Rental', src: 'rental-category' },
    { name: 'Water Bill', src: 'water-bill-category' },
    { name: 'Phone Bill', src: 'phone-bill-category' },
    { name: 'Electricity Bill', src: 'electricity-bill-category' },
    { name: 'Education', src: 'education-category' },
    { name: 'Pets', src: 'pets-category' },
    { name: 'Fitness', src: 'fitness-category' },
    { name: 'Games', src: 'games-category' },
  ]

  const customCategories = [
    { name: 'Custom 1', src: 'custom-category' },
    { name: 'Custom 2', src: 'custom-category' },
    { name: 'Custom 3', src: 'custom-category' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col space-y-6 py-40px px-20px sm:px-100px lg:px-200px">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-headline text-2xl">Category</h1>
          <Button className="btn btn-primary rounded-xl font-bold text-sm">
            Tambah Kategori
          </Button>
        </div>
        <div className="bg-white py-6 rounded-md">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col grow basis-50% px-6">
              <h2 className="font-bold text-base text-headline">Default</h2>
              <div className="py-4">
                {defaultCategories.map((category, i) => (
                  <div
                    key={i}
                    className={`flex text-sm items-center gap-x-4 py-4 border-b-2`}
                  >
                    <img
                      alt="category icon"
                      src={`/svgs/${category.src}.svg`}
                    />
                    <h3>{category.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary mx-20px my-10px md:m-0 h-1px md:h-auto grow md:flex-none md:w-1px"></div>
            <div className="flex flex-col grow basis-50% px-6">
              <h2 className="font-bold text-base text-headline">Custom</h2>
              <div className="py-4">
                {customCategories.map((category, i) => (
                  <div
                    key={i}
                    className={`flex text-sm py-4 border-b-2 justify-between`}
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
                      >
                        <img
                          alt="add icon"
                          src="/svgs/addicon.svg"
                        />
                      </button>
                      <button
                        type="button"
                        className="flex items-center bg-transparent border-none focus:outline-none"
                      >
                        <img
                          alt="add icon"
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
