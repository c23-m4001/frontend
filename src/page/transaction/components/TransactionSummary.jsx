import moment from 'moment'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import { ReactQueryKeys } from '../../../api/constant'
import { TransactionApi } from '../../../api/transactions/transactionApi'
import useFirstTimeEffect from '../../../util/useFirstTimeEffect'

export const TransactionSummary = ({ activeDate, dateRange, wallet }) => {
  const [_, setSearchParams] = useSearchParams()
  const { data, isLoading, refetch } = useQuery(
    [
      ReactQueryKeys.TRANSACTION_SUMMARY_TOTAL,
      {
        start_date: dateRange?.start_date,
        end_date: dateRange?.end_date,
        wallet_id: wallet?.id,
      },
    ],
    () => {
      return TransactionApi.fetchTransactionSummary({
        start_date: dateRange?.start_date,
        end_date: dateRange?.end_date,
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
    [wallet, activeDate]
  )

  return (
    <div className="w-full sm:w-full flex flex-col items-center bg-white text-headline p-2 rounded-md mb-4">
      <div className="w-full flex text-center text-xs sm:text-sm md:text-base lg:text-lg border-b-2">
        <div
          className="cursor-pointer py-3 flex-1"
          onClick={() =>
            setSearchParams({
              active_date: moment(activeDate)
                .subtract(1, 'M')
                .format('MMMM YYYY'),
            })
          }
        >
          {moment(activeDate).subtract(1, 'M').format('MMMM YYYY')}
        </div>
        <div className="py-3 border-b-primary border-b-4px -mb-3px flex-1 font-bold">
          {moment(activeDate).format('MMMM YYYY')}
        </div>
        <div
          className="cursor-pointer py-3 flex-1"
          onClick={() =>
            setSearchParams({
              active_date: moment(activeDate).add(1, 'M').format('MMMM YYYY'),
            })
          }
        >
          {moment(activeDate).add(1, 'M').format('MMMM YYYY')}
        </div>
      </div>
      <div className="w-full flex flex-col gap-2 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base p-3">
        <div className="flex justify-between">
          <p>Starting balance</p>
          <p>Rp. {!isLoading ? data?.summary?.starting_cash : '-'}</p>
        </div>
        <div className="flex justify-between">
          <p>Inflow</p>
          <p className="text-green-600">
            +Rp. {!isLoading ? data?.summary?.total_income : '-'}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Outflow</p>
          <p className="text-danger">
            -Rp. {!isLoading ? data?.summary?.total_expense : '-'}
          </p>
        </div>
      </div>
      <div className="w-full px-3 sm:px-6 md:px-8 text-xs sm:text-sm md:text-base pb-3">
        <div className="flex justify-between pt-3 border-t-2">
          <p>Total</p>
          <p>Rp. {!isLoading ? data?.summary?.grand_total : '-'}</p>
        </div>
      </div>
    </div>
  )
}
