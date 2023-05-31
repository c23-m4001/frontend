import { useQuery } from 'react-query'
import { ReactQueryKeys } from '../../api/constant'
import { AuthApi } from '../../api/auth/authApi'
import { ThisMonthTransactionsItem } from './ThisMonthTransactionsItem'
import { useModal } from '../../core/Modal/ModalProvider'
import moment from 'moment/moment'

export const TransactionPage = ({ amount }) => {
  const { data: nodess, isLoading } = useQuery(
    // TODO: replace with transaction API
    ReactQueryKeys.LOGIN_HISTORIES,
    () => AuthApi.loginHistories().then((r) => r.data?.login_histories),
    {
      cacheTime: 0,
      retry: false,
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

  const { setModal, showModal, hideModal } = useModal()

  const onTransactionClick = (id) => {
    const transactionNow = nodes.filter((transaction) => transaction.id === id)
    
    setModal(
      <div className="flex gap-2">
        <div className="flex flex-2 gap-2 items-center">
          <img
            src="/svgs/avatar.svg"
            className="w-6"
          />
          <div className='flex flex-col gap-2 text-xs'>
            <p className="text-headline text-base font-bold">{transactionNow[0].name}</p>
            <p className='text-paragraph'>{moment(transactionNow.date).format("ddd, MMM Do YYYY")}</p>
            <p className='bg-primary rounded-lg text-white w-max px-4'>{transactionNow[0].category.name}</p>
          </div>
        </div>
        <p className="flex flex-1 justify-end items-center text-right text-green-600 text-sm">
          Rp. {transactionNow[0].amount}
        </p>
      </div>
    )
    showModal()
  }

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-background text-white">
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div className="bg-primary w-full drop-shadow-lg flex justify-center">
            <div className="w-4/5 md:max-w-800px flex flex-col">
              <h1 className="my-8 text-2xl top-0">Transaksi</h1>
              <div className="flex flex-col items-center">
                <h2 className="text-lg pb-4 font-semibold">Cashflow</h2>
                <div className="font-semibold text-4xl pb-28">
                  Rp.{amount}4,750,000
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-4/5 md:max-w-800px sm:gap-8 absolute flex flex-col sm:flex-row items-center mt-60">
            <div className="w-4/5 flex flex-col items-center bg-white text-green-600 p-8 rounded-md mb-4">
              <div className="font-semibold text-xl pb-1">
                Rp.{amount}4,750,000
              </div>
              <p className="font-bold text-headline">Gross Income</p>
            </div>
            <div className="w-4/5 flex flex-col items-center bg-white text-danger p-8 rounded-md mb-4">
              <div className="font-semibold text-xl pb-1">
                Rp.{amount}200,000
              </div>
              <p className="font-bold text-headline">Expense</p>
            </div>
          </div>
          <div className="w-full sm:w-4/5 md:max-w-800px flex flex-col items-center mt-60 sm:mt-24">
            <div className="w-4/5 sm:w-full flex flex-col items-center bg-white text-headline p-2 rounded-md mb-4">
              <div className="w-full sm:px-12 md:px-16 flex text-center text-xs sm:text-sm md:text-base lg:text-lg py-3 border-b-2">
                <div className="flex-1">Last month</div>
                <div className="flex-1">This month</div>
                <div className="flex-1">Future</div>
              </div>
              <div className="w-full sm:px-12 md:px-16 flex-col text-xs sm:text-sm md:text-base p-3">
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
              <div className="w-full px-3 sm:px-12 md:px-16 text-xs sm:text-sm md:text-base pb-3">
                <div className="flex justify-between pt-3 border-t-2">
                  <p>Total</p>
                  <p>Rp. 3,430,000</p>
                </div>
              </div>
            </div>

            <div className="w-4/5 sm:w-full flex flex-col items-center bg-white text-headline p-2 rounded-md mb-4">
              <div className="w-full flex text-center text-xs sm:text-sm md:text-base lg:text-lg py-3 border-b-2">
                <div className="flex-1">This month</div>
              </div>
              <div className="w-full sm:py-6 sm:px-12 md:px-16 flex flex-col text-xs sm:text-sm md:text-base p-3 justify-between gap-2 sm:gap-6">
                {nodes?.map((transaction, idx) => {
                  return (
                    <ThisMonthTransactionsItem
                      key={idx}
                      name={transaction.name}
                      amount={transaction.amount}
                      onClick={() => onTransactionClick(transaction.id)}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
