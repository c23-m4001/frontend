import moment from 'moment'
import { useContext } from 'react'
import { createContext } from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import { ReactQueryKeys } from '../../../api/constant'
import { TransactionApi } from '../../../api/transactions/transactionApi'
import { useActiveWallet } from '../../../core/wallet/ActiveWalletProvider'

const initialTransactionWrapper = {
  transactionData: [],
  isLoading: false,
  refetch: () => {},
}

const TransactionWrapper = createContext(initialTransactionWrapper)

export const useTransactionWrapper = () => useContext(TransactionWrapper)

export const TransactionWrapperProvider = ({ children }) => {
  const { activeWallet } = useActiveWallet()
  const [searchParams] = useSearchParams()
  const activeDate = searchParams.get('active_date') || undefined
  const dateRange = {
    start_date: moment(activeDate).startOf('month').format('YYYY-MM-DD'),
    end_date: moment(activeDate).endOf('month').format('YYYY-MM-DD'),
  }

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
    async () =>
      TransactionApi.fetchTransactions({
        phrase,
        start_date: dateRange.start_date,
        end_date: dateRange.end_date,
        wallet_id: activeWallet?.id,
        sorts: [{ field: 'date', direction: 'desc' }],
      }).then((r) => r.data),
    {
      cacheTime: 0,
    }
  )

  return (
    <TransactionWrapper.Provider
      value={{
        isLoading,
        refetch,
        transactionData,
      }}
    >
      {children}
    </TransactionWrapper.Provider>
  )
}
