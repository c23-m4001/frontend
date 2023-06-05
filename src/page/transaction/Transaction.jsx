import { useQuery } from 'react-query'
import { ReactQueryKeys } from '../../api/constant'
import { ThisMonthTransactionsItem } from './ThisMonthTransactionsItem'
import { useModal } from '../../core/Modal/ModalProvider'
import moment from 'moment/moment'
import { Button } from '../../components/button/Button'
import { useActiveWallet } from '../../core/wallet/ActiveWalletProvider'
import { TransactionApi } from '../../api/transactions/transactionApi'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { loadPages } from '../../util/pagination'
import useFirstTimeEffect from '../../util/useFirstTimeEffect'

export const TransactionPage = ({ amount }) => {
  const { activeWallet } = useActiveWallet()
  const { setModal, showModal, hideModal } = useModal()
  const [searchParams, setSearchParams] = useSearchParams()

  const [dateRange, setDateRange] = useState({
    start_date: moment().startOf('month').format('YYYY-MM-DD'),
    end_date: moment().endOf('month').format('YYYY-MM-DD'),
  })
  const [pages, setPages] = useState([])

  const page = parseInt(searchParams.get('page')) || 1
  const limit = undefined
  const phrase = undefined

  // const [params, setParams] = useState({
  //   phrase,
  //   start_date: dateRange.start_date,
  //   end_date: dateRange.end_date,
  //   wallet_id: activeWallet?.id,
  //   sorts: [{ field: 'date', direction: 'desc' }],
  // })
  const {
    data: transactionData,
    isLoading,
    refetch,
  } = useQuery(
    [
      ReactQueryKeys.TRANSACTION_FILTER,
      {
        phrase,
        start_date: dateRange.start_date,
        end_date: dateRange.end_date,
        wallet_id: activeWallet?.id,
        sorts: [{ field: 'date', direction: 'desc' }],
      },
    ],
    () =>
      TransactionApi.fetchTransactions({
        phrase,
        start_date: dateRange.start_date,
        end_date: dateRange.end_date,
        wallet_id: activeWallet?.id,
        sorts: [{ field: 'date', direction: 'desc' }],
      }).then((r) => r.data),
    {
      cacheTime: 0,
      // keepPreviousData: true,
      // refetchOnWindowFocus: false,
    }
  )

  const nodes = [
    {
      id: '10',
      name: 'Pesen makan',
      amount: 20000,
      category: {
        created_at: '2023-01-01T07:00:00+07:00',
        id: '023b6735-8255-43c0-bc3d-f6d1e423612d',
        is_expense: true,
        is_global: true,
        name: 'Makanan',
        updated_at: '2023-01-01T07:00:00+07:00',
      },
      date: '2023-01-01T07:00:00+07:00',
    },
    {
      id: '11',
      name: 'Bayar sekolah',
      amount: 3450000,
      category: {
        created_at: '2023-01-01T07:00:00+07:00',
        id: '023b6735-8255-43c0-bc3d-f6d1e423612d',
        is_expense: true,
        is_global: true,
        name: 'Education',
        updated_at: '2023-01-01T07:00:00+07:00',
      },
      date: '2023-01-01T07:00:00+07:00',
    },
    {
      id: '12',
      name: 'Beli mainan',
      amount: 300000,
      category: {
        created_at: '2023-01-01T07:00:00+07:00',
        id: '023b6735-8255-43c0-bc3d-f6d1e423612d',
        is_expense: true,
        is_global: true,
        name: 'Hobies',
        updated_at: '2023-01-01T07:00:00+07:00',
      },
      date: '2023-01-01T07:00:00+07:00',
    },
  ]

  const onTransactionClick = (transaction) => {
    setModal(
      <div className="flex flex-col sm:flex-row sm:gap-4 md:py-6">
        <div className="flex flex-2 sm:flex-row-reverse gap-6 pb-4">
          <div className="flex flex-col text-xs">
            <p className="text-headline text-lg font-bold md:text-2xl">
              {transaction.name}
            </p>
            <p className="text-paragraph pb-2 md:text-base">
              {moment(transaction.date).format('ddd, MMM Do YYYY')}
            </p>
            <p className="bg-primary rounded-lg text-white text-sm w-max px-4 md:text-base">
              {transaction.category.name}
            </p>
          </div>
          <img
            src="/svgs/avatar.svg"
            className="w-8 md:w-12"
          />
        </div>
        <p
          className="flex flex-1 justify-end items-center text-right text-green-600 font-semibold
            text-lg py-2 border-t border-secondary sm:border-0 sm:py-0 sm:pb-4 md:text-2xl"
        >
          Rp. {transaction.amount}
        </p>
      </div>
    )
    showModal()
  }

  const onDeleteHandler = (transaction) => {
    setModal(
      <div className="flex flex-col justify-center py-4 text-center gap-4">
        <p>Anda yakin ingin menghapus transaksi?</p>
        <div className="flex justify-center gap-4">
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

  useEffect(() => {
    if (!isLoading) {
      // setPages(
      //   loadPages({
      //     paginationLimit: limit,
      //     maxVisiblePage: 3,
      //     totalData: wallets.total,
      //   })
      // )
    }
  }, [isLoading, page])

  useFirstTimeEffect(
    (firstTime) => {
      if (!firstTime) {
        console.log('REFETCH', dateRange, activeWallet)
        refetch()
      }
    },
    [dateRange, activeWallet]
  )

  return (
    <div className="bg-background">
      <div className="w-full flex flex-col space-y-6 py-40px px-20px sm:px-100px lg:px-200px 2xl:px-400px items-center">
        <div className="w-full flex flex-col items-start text-headline text-lg sm:text-xl md:text-2xl">
          <h1 className="font-bold text-2xl sm:text-2xl xl:text-3xl">
            Transaction
          </h1>
          <div className="w-full flex flex-col items-center py-6">
            <h2 className="pb-4 text-xl font-bold sm:text-2xl">Cashflow</h2>
            <div className="font-bold text-2xl sm:text-3xl">
              Rp.{amount}4,750,000
            </div>
          </div>
        </div>
        <div className="w-full sm:w-full sm:gap-8 flex flex-col sm:flex-row items-center">
          <div className="w-full flex flex-col items-center bg-white text-green-600 p-8 rounded-md mb-4">
            <div className="font-semibold text-xl pb-1">
              Rp.{amount}4,750,000
            </div>
            <p className="font-bold text-headline">Gross Income</p>
          </div>
          <div className="w-full flex flex-col items-center bg-white text-danger p-8 rounded-md mb-4">
            <div className="font-semibold text-xl pb-1">Rp.{amount}200,000</div>
            <p className="font-bold text-headline">Expense</p>
          </div>
        </div>
        <div className="w-full sm:w-full flex flex-col items-center mt-60 sm:mt-24">
          <div className="w-full sm:w-full flex flex-col items-center bg-white text-headline p-2 rounded-md mb-4">
            <div className="w-full flex text-center text-xs sm:text-sm md:text-base lg:text-lg py-3 border-b-2">
              <div className="flex-1">Last month</div>
              <div className="flex-1">This month</div>
              <div className="flex-1">Future</div>
            </div>
            <div className="w-full flex flex-col gap-2 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base p-3">
              <div className="flex justify-between">
                <p>Starting balance</p>
                <p>Rp. 4,750,000</p>
              </div>
              <div className="flex justify-between">
                <p>Inflow</p>
                <p className="text-green-600">+Rp. 680,000</p>
              </div>
              <div className="flex justify-between">
                <p>Outflow</p>
                <p className="text-danger">-Rp. 2,000,000</p>
              </div>
            </div>
            <div className="w-full px-3 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base pb-3">
              <div className="flex justify-between pt-3 border-t-2">
                <p>Total</p>
                <p>Rp. 3,430,000</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-full flex flex-col items-center bg-white text-headline p-2 rounded-md mb-4">
            <div className="w-full flex text-center text-xs sm:text-sm md:text-base lg:text-lg py-3 border-b-2">
              <div className="flex-1">This month</div>
            </div>
            <div className="w-full sm:py-6 sm:px-12 md:px-16 flex flex-col text-xs sm:text-sm md:text-base p-3 justify-between gap-2 sm:gap-6">
              {!isLoading &&
                transactionData?.nodes?.map((transaction, idx) => {
                  return (
                    <ThisMonthTransactionsItem
                      key={idx}
                      transaction={transaction}
                      onClick={() => onTransactionClick(transaction)}
                      onDelete={() => onDeleteHandler(transaction)}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
