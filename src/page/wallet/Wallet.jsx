import { useQuery } from 'react-query'
import clsx from 'clsx'
import { ReactQueryKeys } from '../../api/constant'
import { WalletApi } from '../../api/wallets/walletApi'
import { useSearchParams } from 'react-router-dom'
import useFirstTimeEffect from '../../util/useFirstTimeEffect'
import { useEffect, useState } from 'react'
import { loadPages } from '../../util/pagination'
import { Button } from '../../components/button/Button'
import { useModal } from '../../core/Modal/ModalProvider'
import { Icon } from '@iconify/react'
import { AddWallet } from './components/AddWallet'
import { EditWallet } from './components/EditWallet'

export const WalletPage = () => {
  const { setModal, showModal, hideModal } = useModal()
  const [searchParams, setSearchParams] = useSearchParams()
  const [pages, setPages] = useState([])

  const page = parseInt(searchParams.get('page')) || 1
  const limit = 10
  const phrase = undefined

  const {
    data: wallets,
    isLoading,
    refetch,
  } = useQuery(
    ReactQueryKeys.WALLET_FILTER,
    () =>
      WalletApi.fetchWallets({
        page,
        limit,
        phrase,
        sorts: [{ field: 'name', direction: 'asc' }],
      }).then((r) => r.data),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )

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
          totalData: wallets.total,
        })
      )
    }
  }, [isLoading, page])

  const [selectedWallet, setSelectedWallet] = useState(null)

  const walletOptions = [
    {
      value: 'cash',
      label: (
        <div className="flex items-center gap-x-4 hover:text-primary">
          <Icon
            icon="bi-cash"
            width="24"
          />
          Cash
        </div>
      ),
    },
    {
      value: 'bank',
      label: (
        <div className="flex items-center gap-x-4 hover:text-primary">
          <Icon
            icon="ph-piggy-bank-bold"
            width="24"
          />
          Bank
        </div>
      ),
    },
    {
      value: 'credit card',
      label: (
        <div className="flex items-center gap-x-4 hover:text-primary">
          <Icon
            icon="ic:baseline-credit-card"
            width="24"
          />
          Credit Card
        </div>
      ),
    },
    {
      value: 'loan',
      label: (
        <div className="flex items-center gap-x-4 hover:text-primary">
          <Icon
            icon="uil:moneybag-alt"
            width="24"
          />
          Loan
        </div>
      ),
    },
    {
      value: 'insurance',
      label: (
        <div className="flex items-center gap-x-4 hover:text-primary">
          <Icon
            icon="material-symbols:health-and-safety-outline-rounded"
            width="24"
          />
          Insurance
        </div>
      ),
    },
    {
      value: 'investment',
      label: (
        <div className="flex items-center gap-x-4 hover:text-primary">
          <Icon
            icon="mdi:graph-line-shimmer"
            width="24"
          />
          Investment
        </div>
      ),
    },
    {
      value: 'mortgage',
      label: (
        <div className="flex items-center gap-x-4 hover:text-primary">
          <Icon
            icon="pepicons-pop:house"
            width="24"
          />
          Mortgage
        </div>
      ),
    },
    {
      value: 'bonus',
      label: (
        <div className="flex items-center gap-x-4 hover:text-primary">
          <Icon
            icon="tabler:moneybag"
            width="24"
          />
          Bonus
        </div>
      ),
    },
  ]

  const addWalletButtonClick = () => {
    setModal(<AddWallet refetch={refetch} />)
    showModal()
  }

  const editWalletButtonClick = ({ wallet }) => {
    setModal(
      <EditWallet
        wallet={wallet}
        refetch={refetch}
      />
    )
    showModal()
  }

  const deleteWalletButtonClick = (id) => {
    setModal(
      <div className="flex flex-col justify-center py-4 text-center gap-4">
        <p>Anda yakin ingin menghapus wallet ini?</p>
        <div className="flex justify-center gap-4 text-sm">
          <Button
            type={'button'}
            className="btn bg-danger text-white rounded-full"
            onClick={async () => {
              await WalletApi.deleteWallet({ id: id })
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

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="h-full bg-background">
      <div className="h-full flex flex-col justify-center py-40px px-20px sm:px-100px lg:px-200px">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl sm:text-2xl xl:text-3xl text-headline">
            Wallet
          </h1>
          <button
            type="button"
            className="btn btn-primary rounded-xl font-poppins font-bold text-sm leading-18"
            onClick={addWalletButtonClick}
          >
            Tambah Wallet
          </button>
        </div>

        <div className="grow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20px mb-20px">
            {wallets?.nodes.map((wallet, idx) => (
              <div
                key={idx}
                className="w-full mt-20px"
              >
                <div className="flex flex-col items-left bg-white text-paragraph p-8 rounded-md">
                  <div className="font-semibold text-xl pb-1"></div>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <img
                        alt="cash icon"
                        src="/svgs/cash.svg"
                        className={`duration-500 w-12 h-12 mr-4`}
                      />
                      <div>
                        <div className="flex flex-col">
                          <p className="font-bold text-headline">
                            {wallet.name}
                          </p>
                          <p className="font-bold">Rp.{wallet.total_amount}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <Button
                        onClick={() => editWalletButtonClick({ wallet })}
                        type="button"
                        className="flex items-center bg-transparent border-none focus:outline-none"
                      >
                        <img
                          alt="edit icon"
                          src="/svgs/editicon.svg"
                          className={`duration-500 w-9 h-9 ml-16 mr-5`}
                        />
                      </Button>
                      <Button
                        onClick={() => deleteWalletButtonClick(wallet.id)}
                        type="button"
                        className="flex items-center bg-transparent border-none focus:outline-none"
                      >
                        <img
                          alt="delete icon"
                          src="/svgs/deleteicon.svg"
                          className={`duration-500 w-9 h-9`}
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
