import { useQuery } from 'react-query'
import { ReactQueryKeys } from '../../../api/constant'
import { TransactionApi } from '../../../api/transactions/transactionApi'
import useFirstTimeEffect from '../../../util/useFirstTimeEffect'

export const TransactionSummaryTotal = ({ wallet }) => {
  const { data, isLoading, refetch } = useQuery(
    [
      ReactQueryKeys.TRANSACTION_SUMMARY,
      {
        wallet_id: wallet?.id,
      },
    ],
    () => {
      return TransactionApi.fetchTransactionSummaryTotal({
        wallet_id: wallet?.id,
      }).then((r) => r.data)
    },
    {
      cacheTime: 0,
    }
  )

  useFirstTimeEffect(
    (firstTime) => {
      if (!firstTime) {
        refetch()
      }
    },
    [wallet]
  )

  return (
    <>
      <div className="w-full flex flex-col items-start text-headline text-lg sm:text-xl md:text-2xl">
        <h1 className="font-bold text-2xl sm:text-2xl xl:text-3xl">
          Transaction
        </h1>
        <div className="w-full flex flex-col items-center py-6">
          <h2 className="pb-4 text-xl font-bold sm:text-2xl">Cashflow</h2>
          <div className="font-bold text-2xl sm:text-3xl">
            Rp.{!isLoading && Number(data?.summary_total?.grand_total)
                  .toLocaleString()}
          </div>
        </div>
      </div>
      <div className="w-full sm:w-full sm:gap-8 flex flex-col sm:flex-row items-center">
        <div className="w-full flex flex-col items-center bg-white text-green-600 p-8 rounded-md mb-4">
          <div className="font-semibold text-xl pb-1">
            Rp.{!isLoading && Number(data?.summary_total?.total_income)
                  .toLocaleString()}
          </div>
          <p className="font-bold text-headline">Gross Income</p>
        </div>
        <div className="w-full flex flex-col items-center bg-white text-danger p-8 rounded-md mb-4">
          <div className="font-semibold text-xl pb-1">
            Rp.{!isLoading && Number(data?.summary_total?.total_expense)
                  .toLocaleString()}
          </div>
          <p className="font-bold text-headline">Expense</p>
        </div>
      </div>
    </>
  )
}
