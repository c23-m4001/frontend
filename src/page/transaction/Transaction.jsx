import { useQuery } from 'react-query'
import { ReactQueryKeys } from '../../api/constant'
import { ThisMonthTransactionsItem } from './ThisMonthTransactionsItem'
import { useModal } from '../../core/Modal/ModalProvider'
import moment from 'moment/moment'
import { Button } from '../../components/button/Button'
import { useActiveWallet } from '../../core/wallet/ActiveWalletProvider'
import { TransactionApi } from '../../api/transactions/transactionApi'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import useFirstTimeEffect from '../../util/useFirstTimeEffect'
import { TransactionSummaryTotal } from './components/TransactionSummaryTotal'
import { TransactionSummary } from './components/TransactionSummary'

export const TransactionPage = ({ amount }) => {
  const { activeWallet } = useActiveWallet()
  const { setModal, showModal, hideModal } = useModal()
  const [searchParams] = useSearchParams()
  const activeDate = searchParams.get('active_date') || undefined

  const dateRange = {
    start_date: moment(activeDate).startOf('month').format('YYYY-MM-DD'),
    end_date: moment(activeDate).endOf('month').format('YYYY-MM-DD'),
  }

  const page = parseInt(searchParams.get('page')) || 1
  const phrase = undefined

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
    () => {
      return TransactionApi.fetchTransactions({
        phrase,
        start_date: dateRange.start_date,
        end_date: dateRange.end_date,
        wallet_id: activeWallet?.id,
        sorts: [{ field: 'date', direction: 'desc' }],
      }).then((r) => r.data)
    },
    {
      cacheTime: 0,
    }
  )

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
              await TransactionApi.deleteTransaction({ id: transaction.id })
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
  }, [isLoading, page, transactionData])

  useFirstTimeEffect(
    (firstTime) => {
      if (!firstTime) {
        refetch()
      }
    },
    [activeDate, activeWallet]
  )

  return (
    <div className="bg-background">
      <div className="w-full flex flex-col space-y-6 py-40px px-20px sm:px-100px lg:px-200px 2xl:px-400px items-center">
        <TransactionSummaryTotal wallet={activeWallet} />
        <div className="w-full sm:w-full flex flex-col items-center mt-60 sm:mt-24">
          <TransactionSummary
            activeDate={activeDate}
            dateRange={dateRange}
            wallet={activeWallet}
          />

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
                      refetch={refetch}
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
