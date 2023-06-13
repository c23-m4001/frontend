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
import { Icon } from '@iconify/react'
import { CategoryTypeEnum } from '../../util/enum'
import clsx from 'clsx'
import { useIntl } from 'react-intl'
import { useTransactionWrapper } from '../../layout/header/components/TransactionWrapperProvider'

export const TransactionPage = () => {
  const { activeWallet } = useActiveWallet()
  const { setModal, showModal, hideModal } = useModal()
  const [searchParams] = useSearchParams()
  const activeDate = searchParams.get('active_date') || undefined
  const intl = useIntl()

  const dateRange = {
    start_date: moment(activeDate).startOf('month').format('YYYY-MM-DD'),
    end_date: moment(activeDate).endOf('month').format('YYYY-MM-DD'),
  }

  const page = parseInt(searchParams.get('page')) || 1

  const { transactionData, isLoading, refetch } = useTransactionWrapper()

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
          <Icon
            className="rounded-full bg-background text-primary w-14 h-14 p-5px"
            alt="icon"
            icon={CategoryTypeEnum[transaction.category.logo_type].icon}
          />
        </div>
        <p
          className={clsx({
            'flex flex-1 justify-end items-center text-right font-semibold text-lg py-2 border-t border-secondary sm:border-0 sm:py-0 sm:pb-4 md:text-2xl': true,
            'text-danger': transaction.category.is_expense,
            'text-green-600': !transaction.category.is_expense,
          })}
        >
          Rp{Number(transaction.amount).toLocaleString()}
        </p>
      </div>,
      'Detail Transaksi'
    )
    showModal()
  }

  const onDeleteHandler = (transaction) => {
    setModal(
      <div className="flex flex-col justify-center py-4 text-center gap-4">
        <p>{intl.formatMessage({ id: 'confirmationDeleteTransaction' })}</p>
        <div className="flex justify-center gap-4 text-sm">
          <Button
            type={'button'}
            className="btn bg-danger text-white rounded-full"
            onClick={async () => {
              await TransactionApi.deleteTransaction({ id: transaction.id })
              hideModal()
              refetch()
            }}
          >
            {intl.formatMessage({ id: 'deleteButton' })}
          </Button>
          <Button
            type={'button'}
            className="btn bg-white border border-paragraph text-paragraph rounded-full"
            onClick={() => hideModal()}
          >
            {intl.formatMessage({ id: 'cancelButton' })}
          </Button>
        </div>
      </div>,
      'Hapus Transaksi'
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
              <div className="flex-1">
                {intl.formatMessage({ id: 'thisMonthTransaction' })}
              </div>
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
