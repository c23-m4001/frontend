import { Button } from '../../components/button/Button'
import { useModal } from '../../core/Modal/ModalProvider'
import { Input } from '../../components/input/Input'
import { DefaultCategories } from './components/DefaultCategories'
import { AddCategory } from './components/AddCategory'
import { UserCategories } from './components/UserCategories'
import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { ReactQueryKeys } from '../../api/constant'
import useFirstTimeEffect from '../../util/useFirstTimeEffect'
import { loadPages } from '../../util/pagination'
import { CategoryApi } from '../../api/categories/categoryApi'
import clsx from 'clsx'

export const CategoryPage = () => {
  const { setModal, showModal } = useModal()
  const [searchParams, setSearchParams] = useSearchParams()
  const [pages, setPages] = useState([])

  const page = parseInt(searchParams.get('page')) || 1
  const limit = 6
  const phrase = undefined

  const { data, isLoading, refetch } = useQuery(
    ['user', ReactQueryKeys.CATEGORIES_FILTER, page],
    () =>
      CategoryApi.fetchCategories({
        limit,
        page,
        phrase,
        sorts: [{ field: 'name', direction: 'asc' }],
      }).then((r) => r.data),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )

  const addCategoryButtonClick = () => {
    setModal(<AddCategory refetch={refetch} />, 'Tambah Kategori')
    showModal()
  }

  useFirstTimeEffect(
    (firstTime) => {
      if (!firstTime) {
        refetch()
      }
    },
    [page]
  )

  useEffect(() => {
    if (!isLoading) {
      setPages(
        loadPages({
          paginationLimit: limit,
          maxVisiblePage: 3,
          totalData: data.total,
        })
      )
    }
  }, [isLoading, page, data])

  return (
    <div className="sm:h-full bg-background">
      <div className="h-full flex flex-col space-y-6 py-40px px-20px sm:px-100px lg:px-200px">
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
        <div className="grow">
          <div className="bg-white py-6 rounded-md">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col grow basis-50% px-6">
                <h2 className="font-bold text-base text-headline">Default</h2>
                <div className="py-4">
                  <DefaultCategories />
                </div>
              </div>
              <div className="bg-secondary mx-20px my-10px md:m-0 h-1px md:h-auto grow md:flex-none md:w-1px"></div>
              <div className="flex flex-col grow basis-50% px-6">
                <h2 className="font-bold text-base text-headline">Custom</h2>
                <div className="py-4">
                  <UserCategories
                    data={data}
                    isLoading={isLoading}
                    refetch={refetch}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          {pages.map((pageNumber, idx) => (
            <Button
              className={clsx({
                'btn mr-10px rounded-lg font-bold': true,
                'btn-active': '' + pageNumber.value === '' + page,
                'btn-primary': '' + pageNumber.value !== '' + page,
              })}
              disabled={!pageNumber.is_active}
              key={idx}
              onClick={
                pageNumber.is_active
                  ? () => {
                      setSearchParams({ page: parseInt(pageNumber.value) })
                    }
                  : null
              }
            >
              {pageNumber.value}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
